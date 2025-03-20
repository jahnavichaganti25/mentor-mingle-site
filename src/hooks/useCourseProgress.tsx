
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { CourseProgressRecord } from "@/types/database";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

export function useCourseProgress() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const fetchUserProgress = async (): Promise<CourseProgressRecord[]> => {
    if (!user) return [];

    const { data, error } = await supabase
      .from("user_course_progress")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching user progress:", error);
      throw error;
    }

    return data || [];
  };

  const fetchCourseProgress = async (courseId: string): Promise<CourseProgressRecord | null> => {
    if (!user) return null;

    const { data, error } = await supabase
      .from("user_course_progress")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching course progress:", error);
      throw error;
    }

    return data;
  };

  const updateCourseProgress = async (
    params: { courseId: string; progress: number; completed?: boolean }
  ): Promise<CourseProgressRecord> => {
    if (!user) throw new Error("Not authenticated");

    const { courseId, progress, completed } = params;
    const now = new Date().toISOString();
    
    // Check if there's an existing progress record
    const { data: existingProgress } = await supabase
      .from("user_course_progress")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .maybeSingle();

    let result;
    
    if (existingProgress) {
      // Update existing progress
      const { data, error } = await supabase
        .from("user_course_progress")
        .update({
          progress,
          completed: completed ?? existingProgress.completed,
          last_accessed: now,
          updated_at: now
        })
        .eq("id", existingProgress.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating course progress:", error);
        throw error;
      }
      
      result = data;
    } else {
      // Create new progress record
      const { data, error } = await supabase
        .from("user_course_progress")
        .insert({
          user_id: user.id,
          course_id: courseId,
          progress,
          completed: completed ?? false,
          last_accessed: now
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating course progress:", error);
        throw error;
      }
      
      result = data;
    }

    return result;
  };

  // Get all user progress
  const userProgressQuery = useQuery({
    queryKey: ["userProgress", user?.id],
    queryFn: fetchUserProgress,
    enabled: !!user,
  });

  // Get progress for a specific course
  const getCourseProgress = (courseId: string) => useQuery({
    queryKey: ["courseProgress", user?.id, courseId],
    queryFn: () => fetchCourseProgress(courseId),
    enabled: !!user && !!courseId,
  });

  // Update progress mutation
  const updateProgressMutation = useMutation({
    mutationFn: updateCourseProgress,
    onSuccess: (data) => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ["userProgress", user?.id] });
      queryClient.invalidateQueries({ queryKey: ["courseProgress", user?.id, data.course_id] });
      
      toast({
        title: "Progress updated",
        description: "Your course progress has been saved",
      });
    },
    onError: (error) => {
      toast({
        title: "Update failed",
        description: error instanceof Error ? error.message : "Failed to update progress",
        variant: "destructive",
      });
    },
  });

  return {
    allProgress: userProgressQuery.data || [],
    isLoadingProgress: userProgressQuery.isLoading,
    getCourseProgress,
    updateProgress: updateProgressMutation.mutate,
    isUpdating: updateProgressMutation.isPending,
  };
}
