
import { supabase } from "@/integrations/supabase/client";
import { CourseRecord, CourseWithDetails } from "@/types/database";
import { useQuery } from "@tanstack/react-query";

// Mock data for additional course details not in the database
const courseExtras: Record<string, Omit<CourseWithDetails, keyof CourseRecord>> = {
  default: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.7,
    students: Math.floor(Math.random() * 1000) + 100,
  },
  "python": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: "Beginner",
    rating: 4.9,
  },
  "java": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: "Advance",
    rating: 4.7,
  },
  "react": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    level: "Advance",
    rating: 4.7,
  },
  "mongodb": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: "Advance",
    rating: 4.6,
  },
};

export function useCourses() {
  const fetchCourses = async (): Promise<CourseWithDetails[]> => {
    const { data, error } = await supabase
      .from("courses")
      .select("*");

    if (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }

    // Enhance courses with frontend data
    return data.map(course => {
      const categoryKey = course.category?.toLowerCase() || "";
      const extras = courseExtras[categoryKey] || courseExtras.default;
      
      return {
        ...course,
        ...extras,
      };
    });
  };

  const fetchCourse = async (id: string): Promise<CourseWithDetails | null> => {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No data found
        return null;
      }
      console.error("Error fetching course:", error);
      throw error;
    }

    if (!data) return null;

    const categoryKey = data.category?.toLowerCase() || "";
    const extras = courseExtras[categoryKey] || courseExtras.default;
    
    return {
      ...data,
      ...extras,
    };
  };

  return {
    useCoursesList: () => useQuery({
      queryKey: ["courses"],
      queryFn: fetchCourses,
    }),
    useCourse: (id: string) => useQuery({
      queryKey: ["course", id],
      queryFn: () => fetchCourse(id),
      enabled: !!id,
    })
  };
}
