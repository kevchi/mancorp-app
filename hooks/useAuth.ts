'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';

type UserRole = Database['public']['Enums']['user_role'];
type Profile = Database['public']['Tables']['profiles']['Row'];

export function useAuth() {
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getProfile = async (userId: string) => {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }

      return profile;
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const profile = await getProfile(session.user.id);
        setUser(profile);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  // SIGN-IN
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      throw error;
    }
  };

  // SIGN-UP
  const signUp = async (email: string, password: string, role: UserRole) => {
    try {
      console.log('Starting signup process...');

      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email,
          password,
          options: {
            data: {
              role, // Still store in metadata for quick access
            },
          },
        }
      );

      console.log('Signup response:', { authData, error: signUpError }); // Debug log

      if (signUpError) throw signUpError;

      // If signup successful, create profile
      if (authData.user) {
        console.log('Creating profile...'); // Debug log
        const { error: profileError } = await supabase.from('profiles').insert([
          {
            id: authData.user.id,
            role,
            email,
            is_active: true,
            full_name: '', // Can be updated later
            phone: '', // Can be updated later
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

        console.log('Profile creation response:', { error: profileError }); // Debug log

        if (profileError) throw profileError;
      }
    } catch (error) {
      console.error('Signup error:', error); // Debug log
      throw error;
    }
  };

  // SIGN-OUT
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      throw error;
    }
  };

  // Role check helpers
  const isAdmin = user?.role === 'admin';
  const isCompany = user?.role === 'company';
  const isSupervisor = user?.role === 'supervisor';
  const isEmployee = user?.role === 'employee';

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    isAdmin,
    isCompany,
    isSupervisor,
    isEmployee,
  };
}
