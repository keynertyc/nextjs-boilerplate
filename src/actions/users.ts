'use server'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers';

export const createUserFromClerk = async (userId: string) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
      
  const { data: user } = await supabase.from('users').select('*').eq('user_id', userId).single()

  if (user) {
    return
  }

  await supabase.from('users').insert({ user_id: userId })
}