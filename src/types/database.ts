
import { Database } from "@/integrations/supabase/types";

// Course type from Supabase database
export type CourseRecord = Database["public"]["Tables"]["courses"]["Row"];

// Profile type from Supabase database
export type ProfileRecord = Database["public"]["Tables"]["profiles"]["Row"];

// Course progress type from Supabase database
export type CourseProgressRecord = Database["public"]["Tables"]["user_course_progress"]["Row"];

// Placement type from Supabase database
export type PlacementRecord = Database["public"]["Tables"]["placements"]["Row"];

// Placement application type from Supabase database
export type PlacementApplicationRecord = Database["public"]["Tables"]["placement_applications"]["Row"];

// Extended course type with additional frontend properties
export interface CourseWithDetails extends CourseRecord {
  logo?: string;
  instructor?: string;
  level?: "Beginner" | "Advance";
  price?: string;
  rating?: number;
  students?: number;
}

// Education entry type
export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

// Experience entry type
export interface ExperienceEntry {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

// Extended profile type with parsed JSON fields
export interface ProfileWithDetails extends Omit<ProfileRecord, 'education' | 'experience'> {
  education: EducationEntry[];
  experience: ExperienceEntry[];
}
