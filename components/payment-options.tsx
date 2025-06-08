import { Card, CardContent } from "@/components/ui/card"

export default function PaymentOptions() {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-sm font-medium mb-2">Accepted Payment Methods</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
            <span className="font-medium">OPay</span>
          </div>
          <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
            <span className="font-medium">First Bank</span>
          </div>
          <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
            <span className="font-medium">PayPal</span>
          </div>
          <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
            <span className="font-medium">Bitcoin</span>
          </div>
          <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
            <span className="font-medium">Credit Card</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
