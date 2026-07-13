import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl,supabaseAnonKey,{
    auth:{
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }   
})

export default supabase
