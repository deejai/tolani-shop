"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { formatCurrency } from "@/lib/utils"

interface CheckoutFormProps {
  total: number
}

export default function CheckoutForm({ total }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("opay")
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payment_method: paymentMethod,
          total: total,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Redirect to success page
        window.location.href = "/checkout/success"
      } else {
        throw new Error(data.error || "Checkout failed")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-medium">Payment Method</h3>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="opay" id="opay" />
            <Label htmlFor="opay">OPay</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="firstbank" id="firstbank" />
            <Label htmlFor="firstbank">First Bank</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="bitcoin" id="bitcoin" />
            <Label htmlFor="bitcoin">Bitcoin</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">Credit/Debit Card</Label>
          </div>
        </RadioGroup>
      </div>

      <Button className="w-full bg-[#1a2942] hover:bg-[#2a3952]" onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : `Checkout ${formatCurrency(total)}`}
      </Button>
    </div>
  )
}
