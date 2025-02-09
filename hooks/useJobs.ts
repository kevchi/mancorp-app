"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type CleaningJob = {
  id: string
  request_id: string
  assigned_team_id: string
  scheduled_date: string
  start_time: string
  end_time: string
  status: "scheduled" | "in-progress" | "completed" | "cancelled"
  priority: "low" | "medium" | "high"
  notes?: string
  created_at: string
}

type CreateJobInput = Omit<CleaningJob, "id" | "created_at">

export function useJobs() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const supabase = createClientComponentClient()

  const getJobs = async (teamId?: string) => {
    try {
      setLoading(true)
      setError(null)
      
      let query = supabase
        .from("cleaning_jobs")
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
        .order("scheduled_date", { ascending: true })

      if (teamId) {
        query = query.eq("assigned_team_id", teamId)
      }

      const { data, error } = await query

      if (error) throw error
      return data as (CleaningJob & {
        cleaning_requests: {
          client_id: string
          service_type: string
          property_size: number
          special_instructions?: string
        }
        teams: {
          name: string
          supervisor_id: string
        }
      })[]
    } catch (err) {
      setError(err as Error)
      return []
    } finally {
      setLoading(false)
    }
  }

  const createJob = async (job: CreateJobInput) => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from("cleaning_jobs")
        .insert([job])
        .select()
        .single()

      if (error) throw error
      return data as CleaningJob
    } catch (err) {
      setError(err as Error)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const updateJobStatus = async (jobId: string, status: CleaningJob["status"]) => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from("cleaning_jobs")
        .update({ status })
        .eq("id", jobId)
        .select()
        .single()

      if (error) throw error
      return data as CleaningJob
    } catch (err) {
      setError(err as Error)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const assignTeam = async (jobId: string, teamId: string) => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from("cleaning_jobs")
        .update({ assigned_team_id: teamId })
        .eq("id", jobId)
        .select()
        .single()

      if (error) throw error
      return data as CleaningJob
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
    getJobs,
    createJob,
    updateJobStatus,
    assignTeam,
  }
}