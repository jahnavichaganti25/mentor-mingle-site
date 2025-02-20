
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "C Programming", category: "Programming" },
  { id: 2, title: "Java", category: "Programming" },
  { id: 3, title: "Python", category: "Programming" },
  { id: 4, title: "JavaScript", category: "Web Development" },
  { id: 5, title: "HTML & CSS", category: "Web Development" },
  { id: 6, title: "DSA", category: "Computer Science" },
  { id: 7, title: "Machine Learning", category: "AI/ML" },
  { id: 8, title: "Power BI", category: "Data Analytics" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6">Learn Skills for Your Future Career</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access high-quality courses, placement materials, and expert guidance to accelerate your career growth
          </p>
          <Button size="lg" className="text-lg px-8">
            Explore Courses
          </Button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="p-6 card-hover">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.category}</p>
                <Link to={`/courses/${course.id}`}>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Recent Activity</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <p className="text-gray-600 text-center">
                Sign in to view your recent activity and track your learning progress
              </p>
              <div className="flex justify-center mt-4">
                <Button>Sign In</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
