import { createClient } from '@supabase/supabase-js';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';

// Client-side Supabase instance
export const createClientSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase credentials');
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey);
};

// Server-side Supabase instance
export const createServerSupabase = () => {
  return createServerComponentClient<Database>({ cookies });
};

// Default export for backwards compatibility
export const supabase = createClientSupabase();
