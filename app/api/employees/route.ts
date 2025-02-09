import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "Employees API" })
}

export async function POST() {
  return NextResponse.json({ message: "Create Employee" })
}