import { NextResponse } from "next/server"
import { updateCartItem } from "@/lib/data"

export async function POST(request: Request) {
  try {
    const { id, quantity } = await request.json()
    updateCartItem(id, quantity)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 })
  }
}
