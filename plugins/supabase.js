// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const supabaseUrl = nuxtApp.$config.public.supabaseUrl
  const supabaseKey = nuxtApp.$config.public.supabaseKey

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and Key are required.")
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  nuxtApp.provide('supabase', supabase)
})
