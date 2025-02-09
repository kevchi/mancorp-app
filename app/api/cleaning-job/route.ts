import { validateRequest } from '@/lib/auth'
import { supabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // Check if user is authenticated and has appropriate role
  const authError = await validateRequest(req, ['supervisor', 'employee'])
  if (authError) return authError

  try {
    const { data, error } = await supabase
      .from('cleaning_jobs')
      .select(`
        *,
        cleaning_requests (
          client_id,
          service_type,
          property_size,
          special_instructions
        ),
        teams (
          name,
          supervisor_id
        )
      `)
      .order('scheduled_date', { ascending: true })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch cleaning jobs' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  // Only supervisors can create jobs
  const authError = await validateRequest(req, ['supervisor'])
  if (authError) return authError

  try {
    const body = await req.json()

    const { data, error } = await supabase
      .from('cleaning_jobs')
      .insert([body])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create cleaning job' },
      { status: 500 }
    )
  }
}