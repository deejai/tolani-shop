import { NextResponse } from "next/server"

// In a real app, this would save to a database
const subscribers: string[] = []

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 400 })
    }

    subscribers.push(email)
    return NextResponse.json({ success: true, message: "Successfully subscribed!" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
