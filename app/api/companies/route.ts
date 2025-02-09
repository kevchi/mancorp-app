import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "Companies API" })
}

export async function POST() {
  return NextResponse.json({ message: "Create Company" })
}