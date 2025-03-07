import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Clock } from "lucide-react";

// Define 4 popular courses with additional info
const popularCourses = [
  { 
    id: 1, 
    title: "Python",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300&h=200",
    description: "Learn Python programming from scratch with hands-on projects"
  },
  { 
    id: 3, 
    title: "Machine Learning", 
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300&h=200",
    description: "Master machine learning algorithms and practical applications"
  },
  { 
    id: 5, 
    title: "React.js", 
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300&h=200",
    description: "Build modern web applications with React and related tools"
  },
  { 
    id: 7, 
    title: "Data Science", 
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=300&h=200",
    description: "Analyze data and extract insights using statistical methods"
  },
];

// Recent activity items
const recentActivity = [
  { id: 1, title: "Completed Chapter 1 of Python", timestamp: "2 days ago" },
  { id: 2, title: "Started Data Science course", timestamp: "5 days ago" },
  { id: 3, title: "Completed quiz in Machine Learning", timestamp: "1 week ago" },
];

const Index = () => {
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
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary">{course.category}</span>
                    <BookOpen className="h-4 w-4 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{course.description}</p>
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
            {recentActivity.length > 0 ? (
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
                  Sign in to view your recent activity and track your learning progress
                </p>
                <div className="flex justify-center mt-4">
                  <Button>Sign In</Button>
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
