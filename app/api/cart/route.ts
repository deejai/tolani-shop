import { NextResponse } from "next/server"
import { cartItems } from "@/lib/data"

export async function GET() {
  return NextResponse.json(cartItems)
}
