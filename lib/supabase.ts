import { createClient } from "@supabase/supabase-js";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// A missing deployment setting must not take down the marketing page.
export const supabase = url && key ? createClient(url, key) : null;
