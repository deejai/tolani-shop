import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-playfair text-[#1a2942] mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We've sent a confirmation email with your order details.
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="font-medium mb-4">Order #12345</h2>
          <div className="space-y-2 text-sm">
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Payment Method: OPay</p>
            <p>Shipping Address: 123 Fashion Street, Lagos, Nigeria</p>
            <p>Estimated Delivery: 2-5 business days</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#1a2942] hover:bg-[#2a3952]">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/account/orders">View Orders</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
