export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string;
          name: string;
          address: string | null;
          contact_email: string | null;
          contact_phone: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          address?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          address?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          role: 'admin' | 'company' | 'supervisor' | 'employee';
          is_active: boolean;
          full_name: string | null;
          email: string;
          phone: string | null;
          company_id: string | null;
          supervisor_id: string | null;
          last_login: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          role: 'admin' | 'company' | 'supervisor' | 'employee';
          is_active?: boolean;
          full_name?: string | null;
          email: string;
          phone?: string | null;
          company_id?: string | null;
          supervisor_id?: string | null;
          last_login?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          role?: 'admin' | 'company' | 'supervisor' | 'employee';
          is_active?: boolean;
          full_name?: string | null;
          email?: string;
          phone?: string | null;
          company_id?: string | null;
          supervisor_id?: string | null;
          last_login?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      locations: {
        Row: {
          id: string;
          company_id: string;
          name: string;
          code: string;
          description: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          company_id: string;
          name: string;
          code: string;
          description?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          company_id?: string;
          name?: string;
          code?: string;
          description?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      cleaning_requests: {
        Row: {
          id: string;
          location_id: string;
          company_id: string;
          requestor_id: string | null;
          type: 'spill' | 'no_tissue' | 'no_towel' | 'general';
          description: string | null;
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
          priority: 'low' | 'normal' | 'high' | 'urgent';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          location_id: string;
          company_id: string;
          requestor_id?: string | null;
          type: 'spill' | 'no_tissue' | 'no_towel' | 'general';
          description?: string | null;
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled';
          priority?: 'low' | 'normal' | 'high' | 'urgent';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          location_id?: string;
          company_id?: string;
          requestor_id?: string | null;
          type?: 'spill' | 'no_tissue' | 'no_towel' | 'general';
          description?: string | null;
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled';
          priority?: 'low' | 'normal' | 'high' | 'urgent';
          created_at?: string;
          updated_at?: string;
        };
      };
      cleaning_jobs: {
        Row: {
          id: string;
          request_id: string;
          company_id: string;
          location_id: string;
          assigned_by: string;
          assigned_to: string;
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
          priority: 'low' | 'normal' | 'high' | 'urgent';
          notes: string | null;
          started_at: string | null;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          request_id: string;
          company_id: string;
          location_id: string;
          assigned_by: string;
          assigned_to: string;
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled';
          priority?: 'low' | 'normal' | 'high' | 'urgent';
          notes?: string | null;
          started_at?: string | null;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          request_id?: string;
          company_id?: string;
          location_id?: string;
          assigned_by?: string;
          assigned_to?: string;
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled';
          priority?: 'low' | 'normal' | 'high' | 'urgent';
          notes?: string | null;
          started_at?: string | null;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      inventory: {
        Row: {
          id: string;
          location_id: string;
          item_name: string;
          quantity: number;
          low_stock_threshold: number;
          last_restocked_by: string | null;
          last_restocked_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          location_id: string;
          item_name: string;
          quantity?: number;
          low_stock_threshold?: number;
          last_restocked_by?: string | null;
          last_restocked_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          location_id?: string;
          item_name?: string;
          quantity?: number;
          low_stock_threshold?: number;
          last_restocked_by?: string | null;
          last_restocked_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_user_role: {
        Args: Record<PropertyKey, never>;
        Returns: 'admin' | 'company' | 'supervisor' | 'employee';
      };
    };
    Enums: {
      user_role: 'admin' | 'company' | 'supervisor' | 'employee';
      request_status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
      request_type: 'spill' | 'no_tissue' | 'no_towel' | 'general';
      priority_level: 'low' | 'normal' | 'high' | 'urgent';
    };
  };
}
