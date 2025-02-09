import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "Inventory API" })
}

export async function POST() {
  return NextResponse.json({ message: "Create Inventory Item" })
}