"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2 } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import CheckoutForm from "@/components/checkout-form"

interface CartItem {
  id: number
  product_id: number
  name: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
  category: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [couponCode, setCouponCode] = useState("")

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("/api/cart")
        const data = await response.json()
        setCartItems(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching cart:", error)
        setLoading(false)
      }
    }

    fetchCart()
  }, [])

  const updateQuantity = async (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))

    try {
      await fetch("/api/cart/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, quantity: newQuantity }),
      })
    } catch (error) {
      console.error("Error updating cart:", error)
    }
  }

  const removeItem = async (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))

    try {
      await fetch("/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
    } catch (error) {
      console.error("Error removing from cart:", error)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 20000 ? 0 : 1500
  const total = subtotal + shipping

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-playfair text-[#1a2942] mb-8">Shopping Cart</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4 flex gap-4">
                <Skeleton className="h-24 w-24 rounded-md" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-playfair text-[#1a2942] mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Button asChild className="bg-[#1a2942] hover:bg-[#2a3952]">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 flex gap-4">
                <Link href={`/shop/${item.category}/${item.product_id}`} className="shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="rounded-md object-cover"
                  />
                </Link>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <Link
                      href={`/shop/${item.category}/${item.product_id}`}
                      className="font-medium hover:text-[#d5a293]"
                    >
                      {item.name}
                    </Link>
                    <span className="font-playfair text-[#d5a293]">{formatCurrency(item.price)}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item.color}
                    {item.size ? `, ${item.size}` : ""}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border rounded-md">
                      <button className="px-3 py-1 border-r" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button className="px-3 py-1 border-l" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <button className="text-gray-500 hover:text-red-500" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-5 w-5" />
                      <span className="sr-only">Remove item</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-4">
              <Input placeholder="Coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
              <Button variant="outline">Apply Coupon</Button>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="border rounded-lg p-6 bg-gray-50 sticky top-24">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
                </div>
                <div className="border-t pt-2 mt-2 font-medium flex justify-between">
                  <span>Total</span>
                  <span className="font-playfair text-[#d5a293]">{formatCurrency(total)}</span>
                </div>
              </div>

              <CheckoutForm total={total} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
