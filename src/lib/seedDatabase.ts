
import { supabase } from "@/integrations/supabase/client";

// Sample courses data for seeding
const coursesData = [
  {
    title: "Introduction to Programming",
    description: "Learn the fundamentals of programming with this course. https://www.youtube.com/embed/zOjov-2OZ0E",
    category: "programming",
    image_url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
  },
  {
    title: "Python Programming",
    description: "Master Python programming from basics to advanced concepts. https://www.youtube.com/embed/rfscVS0vtbw",
    category: "python",
    image_url: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
  },
  {
    title: "React.js",
    description: "Build modern web applications with React and its ecosystem. https://www.youtube.com/embed/w7ejDZ8SWv8",
    category: "react",
    image_url: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
  },
  {
    title: "Data Science",
    description: "Analyze and interpret complex data to inform decision making. https://www.youtube.com/embed/ua-CiDNNj30",
    category: "data-science",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
  },
  {
    title: "Machine Learning",
    description: "Introduction to machine learning algorithms and applications. https://www.youtube.com/embed/qFJeN9V1ZsI",
    category: "machine-learning",
    image_url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
  }
];

/**
 * Seeds the database with sample courses if none exist.
 * This function should be called once during application initialization.
 */
export const seedCoursesIfEmpty = async () => {
  // Check if there are existing courses
  const { data: existingCourses, error: checkError } = await supabase
    .from("courses")
    .select("id")
    .limit(1);

  if (checkError) {
    console.error("Error checking courses:", checkError);
    return;
  }

  // If courses exist, don't seed
  if (existingCourses && existingCourses.length > 0) {
    console.log("Database already has courses, skipping seed");
    return;
  }

  // Add sample courses
  const { error: insertError } = await supabase
    .from("courses")
    .insert(coursesData);

  if (insertError) {
    console.error("Error seeding courses:", insertError);
    return;
  }

  console.log("Database seeded with sample courses");
};
