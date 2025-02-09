import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "Cleaning Requests API" })
}

export async function POST() {
  return NextResponse.json({ message: "Create Cleaning Request" })
}