import { NextResponse } from "next/server"

// In a real app, this would save to a database
const whatsappSubscribers: string[] = []

export async function POST(request: Request) {
  try {
    const { phoneNumber } = await request.json()

    if (!phoneNumber || phoneNumber.length < 10) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 })
    }

    if (whatsappSubscribers.includes(phoneNumber)) {
      return NextResponse.json({ error: "Phone number already subscribed" }, { status: 400 })
    }

    whatsappSubscribers.push(phoneNumber)
    return NextResponse.json({ success: true, message: "Successfully subscribed to WhatsApp updates!" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
