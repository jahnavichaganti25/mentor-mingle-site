
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Clock } from "lucide-react";
import { useCourses } from "@/hooks/useCourses";
import { useAuth } from "@/contexts/AuthContext";
import { useCourseProgress } from "@/hooks/useCourseProgress";

const Index = () => {
  const { user } = useAuth();
  const { useCoursesList } = useCourses();
  const { data: courses, isLoading: isLoadingCourses } = useCoursesList();
  const { allProgress, isLoadingProgress } = useCourseProgress();

  // Get popular courses (most recently added or highest rated)
  const popularCourses = courses?.slice(0, 4) || [];

  // Generate recent activity based on user progress
  const generateRecentActivity = () => {
    if (!user || !allProgress || allProgress.length === 0) {
      return [];
    }

    // Sort by last accessed time
    const sortedProgress = [...allProgress].sort(
      (a, b) => new Date(b.last_accessed).getTime() - new Date(a.last_accessed).getTime()
    );

    // Take up to 3 most recent activities
    return sortedProgress.slice(0, 3).map(progress => {
      const courseTitle = courses?.find(c => c.id === progress.course_id)?.title || "Unknown Course";
      const daysAgo = Math.floor((new Date().getTime() - new Date(progress.last_accessed).getTime()) / (1000 * 60 * 60 * 24));
      
      let activity = progress.completed 
        ? `Completed ${courseTitle}`
        : `Made progress on ${courseTitle}`;
      
      let timestamp = daysAgo === 0 
        ? "Today" 
        : daysAgo === 1 
          ? "Yesterday" 
          : daysAgo < 7 
            ? `${daysAgo} days ago` 
            : `${Math.floor(daysAgo / 7)} weeks ago`;
      
      return { id: progress.id, title: activity, timestamp };
    });
  };

  const recentActivity = generateRecentActivity();

  if (isLoadingCourses) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading courses...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6">Learn Skills for Your Future Career</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Access high-quality courses, placement materials, and expert guidance to accelerate your career growth
          </p>
          <Link to="/courses">
            <Button size="lg" className="text-lg px-8">
              Explore Courses
            </Button>
          </Link>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-semibold">Popular Courses</h2>
            <Link to="/courses">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCourses.map((course) => (
              <Card key={course.id} className="p-0 overflow-hidden card-hover">
                <div className="relative h-48 w-full">
                  <img 
                    src={course.image_url || course.logo} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300&h=200";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary">{course.category || "Programming"}</span>
                    <BookOpen className="h-4 w-4 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{course.description || "Learn valuable skills with this course"}</p>
                  <Link to={`/course/${course.id}`}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">Recent Activity</h2>
          <div className="max-w-3xl mx-auto">
            {user && recentActivity.length > 0 ? (
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <Card key={activity.id} className="p-4 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm text-gray-500">{activity.timestamp}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-6">
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {user 
                    ? "Start exploring courses to see your recent activity here"
                    : "Sign in to view your recent activity and track your learning progress"
                  }
                </p>
                <div className="flex justify-center mt-4">
                  {!user && <Button>Sign In</Button>}
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
