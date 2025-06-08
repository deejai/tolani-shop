import { NextResponse } from "next/server"
import { addToCart, products } from "@/lib/data"

export async function POST(request: Request) {
  try {
    const { product_id, quantity, color, size } = await request.json()

    const product = products.find((p) => p.id === product_id)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    addToCart({
      product_id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color,
      size,
      quantity,
      category: product.category,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add to cart" }, { status: 500 })
  }
}
