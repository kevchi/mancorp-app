"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type CleaningRequest = {
  id: string
  client_id: string
  service_type: "regular" | "deep" | "specialized"
  property_size: number
  preferred_date: string
  preferred_time: string
  special_instructions?: string
  status: "pending" | "approved" | "scheduled" | "rejected"
  created_at: string
}

type CreateRequestInput = Omit<CleaningRequest, "id" | "client_id" | "status" | "created_at">

export function useRequests() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const supabase = createClientComponentClient()

  const getRequests = async (clientId?: string) => {
    try {
      setLoading(true)
      setError(null)
      
      let query = supabase
        .from("cleaning_requests")
        .select("*")
        .order("created_at", { ascending: false })

      if (clientId) {
        query = query.eq("client_id", clientId)
      }

      const { data, error } = await query

      if (error) throw error
      return data as CleaningRequest[]
    } catch (err) {
      setError(err as Error)
      return []
    } finally {
      setLoading(false)
    }
  }

  const createRequest = async (request: CreateRequestInput) => {
    try {
      setLoading(true)
      setError(null)

      const { data: userData, error: userError } = await supabase.auth.getUser()
      if (userError) throw userError

      const { data, error } = await supabase
        .from("cleaning_requests")
        .insert([
          {
            ...request,
            client_id: userData.user.id,
            status: "pending",
          },
        ])
        .select()
        .single()

      if (error) throw error
      return data as CleaningRequest
    } catch (err) {
      setError(err as Error)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const updateRequestStatus = async (requestId: string, status: CleaningRequest["status"]) => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from("cleaning_requests")
        .update({ status })
        .eq("id", requestId)
        .select()
        .single()

      if (error) throw error
      return data as CleaningRequest
    } catch (err) {
      setError(err as Error)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    getRequests,
    createRequest,
    updateRequestStatus,
  }
}