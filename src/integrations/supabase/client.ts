// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zkpwkuvivgoeayotjave.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcHdrdXZpdmdvZWF5b3RqYXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTE0NDMsImV4cCI6MjA1ODA2NzQ0M30.wjPszOi60MIDztLs1_K7Og9I4hdLgrNnUuZNUp3tvbk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);