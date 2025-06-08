import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"

export default function OrdersPage() {
  // Mock order data
  const orders = [
    {
      id: "ORD-12345",
      date: "2024-01-15",
      status: "delivered",
      total: 33000,
      items: [
        { name: "Elegant Wrap Blouse", quantity: 1, price: 15000 },
        { name: "High-Waist Trousers", quantity: 1, price: 18000 },
      ],
    },
    {
      id: "ORD-12344",
      date: "2024-01-10",
      status: "shipped",
      total: 21000,
      items: [{ name: "Silk Midi Dress", quantity: 1, price: 25000 }],
    },
    {
      id: "ORD-12343",
      date: "2024-01-05",
      status: "processing",
      total: 9000,
      items: [{ name: "Gold Chain Bracelet", quantity: 1, price: 9000 }],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-playfair text-[#1a2942]">My Orders</h1>
        <Button asChild variant="outline">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">No orders yet</h2>
          <p className="text-gray-500 mb-8">When you place your first order, it will appear here.</p>
          <Button asChild className="bg-[#1a2942] hover:bg-[#2a3952]">
            <Link href="/shop">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Order {order.id}</CardTitle>
                    <p className="text-sm text-gray-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>{order.status.toUpperCase()}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-playfair text-[#d5a293]">{formatCurrency(item.price)}</p>
                    </div>
                  ))}
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="font-medium">Total</span>
                    <span className="font-playfair text-lg text-[#d5a293]">{formatCurrency(order.total)}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {order.status === "delivered" && (
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
