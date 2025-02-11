'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type User = {
  id: string;
  email: string;
  role: 'customer' | 'employee' | 'supervisor';
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser({
          id: session.user.id,
          email: session.user.email!,
          role: session.user.user_metadata.role || 'customer',
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

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
  const signUp = async (
    email: string,
    password: string,
    role: User['role']
  ) => {
    try {
      console.log('Starting signup process...'); // Debug log

      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email,
          password,
          options: {
            data: {
              role,
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
            role: role,
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

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
}
