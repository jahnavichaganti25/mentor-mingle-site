
import { Database } from "@/integrations/supabase/types";

// Course type from Supabase database
export type CourseRecord = Database["public"]["Tables"]["courses"]["Row"];

// Profile type from Supabase database
export type ProfileRecord = Database["public"]["Tables"]["profiles"]["Row"];

// Course progress type from Supabase database
export type CourseProgressRecord = Database["public"]["Tables"]["user_course_progress"]["Row"];

// Extended course type with additional frontend properties
export interface CourseWithDetails extends CourseRecord {
  logo?: string;
  instructor?: string;
  level?: "Beginner" | "Advance";
  price?: string;
  rating?: number;
  students?: number;
}
