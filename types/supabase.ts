export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cleaning_requests: {
        Row: {
          id: string
          client_id: string
          service_type: "regular" | "deep" | "specialized"
          property_size: number
          preferred_date: string
          preferred_time: string
          special_instructions: string | null
          status: "pending" | "approved" | "scheduled" | "rejected"
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          service_type: "regular" | "deep" | "specialized"
          property_size: number
          preferred_date: string
          preferred_time: string
          special_instructions?: string | null
          status?: "pending" | "approved" | "scheduled" | "rejected"
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          service_type?: "regular" | "deep" | "specialized"
          property_size?: number
          preferred_date?: string
          preferred_time?: string
          special_instructions?: string | null
          status?: "pending" | "approved" | "scheduled" | "rejected"
          created_at?: string
        }
      }
      cleaning_jobs: {
        Row: {
          id: string
          request_id: string
          assigned_team_id: string
          scheduled_date: string
          start_time: string
          end_time: string
          status: "scheduled" | "in-progress" | "completed" | "cancelled"
          priority: "low" | "medium" | "high"
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          request_id: string
          assigned_team_id: string
          scheduled_date: string
          start_time: string
          end_time: string
          status?: "scheduled" | "in-progress" | "completed" | "cancelled"
          priority?: "low" | "medium" | "high"
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          request_id?: string
          assigned_team_id?: string
          scheduled_date?: string
          start_time?: string
          end_time?: string
          status?: "scheduled" | "in-progress" | "completed" | "cancelled"
          priority?: "low" | "medium" | "high"
          notes?: string | null
          created_at?: string
        }
      }
      teams: {
        Row: {
          id: string
          name: string
          supervisor_id: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          supervisor_id: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          supervisor_id?: string
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          role: "customer" | "employee" | "supervisor"
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          role?: "customer" | "employee" | "supervisor"
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: "customer" | "employee" | "supervisor"
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}