"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Share2 } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import PaymentOptions from "@/components/payment-options"

interface Product {
  id: number
  name: string
  price: number
  description: string
  details: string
  sizes: string[]
  colors: string[]
  images: string[]
  category: string
}

export default function ProductPage({ params }: { params: { category: string; id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState("1")
  const [mainImage, setMainImage] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`)
        const data = await response.json()

        if (response.ok) {
          setProduct(data)
          setMainImage(data.images[0])
          setSelectedColor(data.colors[0])
          if (data.sizes.length > 0) {
            setSelectedSize(data.sizes[1] || data.sizes[0])
          }
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching product:", error)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  const handleAddToCart = async () => {
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: product?.id,
          quantity: Number.parseInt(quantity),
          color: selectedColor,
          size: selectedSize,
        }),
      })

      if (response.ok) {
        toast({
          title: "Added to cart",
          description: `${product?.name} (${selectedColor}, ${selectedSize}) x${quantity} added to your cart.`,
        })
      } else {
        throw new Error("Failed to add to cart")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add to cart. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="flex gap-2 mt-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="w-24 h-24 rounded-lg" />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-24 w-full" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-1/4" />
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="w-10 h-10 rounded-full" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-6 w-1/4" />
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-10 h-10 rounded-lg" />
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl">Product not found</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image src={mainImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square overflow-hidden rounded-lg ${
                  mainImage === image ? "ring-2 ring-[#d5a293]" : ""
                }`}
                onClick={() => setMainImage(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-playfair text-[#1a2942]">{product.name}</h1>
            <p className="mt-2 text-2xl font-playfair text-[#d5a293]">{formatCurrency(product.price)}</p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Color</Label>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-2">
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem value={color} id={`color-${color}`} />
                    <Label htmlFor={`color-${color}`}>{color}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {product.category === "clothing" && (
              <div className="space-y-2">
                <Label>Size</Label>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex gap-2">
                  {product.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={`size-${size}`} />
                      <Label htmlFor={`size-${size}`}>{size}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            <div className="space-y-2">
              <Label>Quantity</Label>
              <Select value={quantity} onValueChange={setQuantity}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleAddToCart} className="bg-[#1a2942] hover:bg-[#2a3952] text-white" size="lg">
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="w-12 h-12">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button variant="outline" size="icon" className="w-12 h-12">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share product</span>
            </Button>
          </div>

          <PaymentOptions />

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4 text-sm space-y-2">
              {product.details.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </TabsContent>
            <TabsContent value="shipping" className="mt-4 text-sm space-y-2">
              <p>Free shipping on orders over ₦20,000 within Lagos.</p>
              <p>Nationwide delivery available (2-5 business days).</p>
              <p>Returns accepted within 14 days of delivery.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
