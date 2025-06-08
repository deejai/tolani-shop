import { NextResponse } from "next/server"
import { removeFromCart } from "@/lib/data"

export async function POST(request: Request) {
  try {
    const { id } = await request.json()
    removeFromCart(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove from cart" }, { status: 500 })
  }
}
