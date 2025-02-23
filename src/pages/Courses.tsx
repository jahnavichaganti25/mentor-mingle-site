
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { HTMLProps } from "react";

interface CourseCardProps extends HTMLProps<HTMLDivElement> {
  id: string;
  title: string;
  logo: string;
  instructor: string;
  level: "Beginner" | "Advance";
  price: string;
}

const CourseCard = ({ id, title, logo, instructor, level, price }: CourseCardProps) => (
  <Link to={`/course/${id}`}>
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6 space-y-4">
        <img src={logo} alt={title} className="w-24 h-24 mx-auto" />
        <h3 className="text-xl font-semibold text-center">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/ad53633c-804a-483d-aa7e-5d9e24094cdb.png" alt="instructor" className="w-8 h-8 rounded-full" />
            <span className="text-sm text-gray-600">{instructor}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            level === "Beginner" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
          }`}>
            {level}
          </span>
        </div>
        <div className="pt-4 border-t">
          <span className="font-bold text-lg">{price}</span>
        </div>
      </div>
    </Card>
  </Link>
);

const courses = [
  {
    id: "html",
    title: "HTML Complete Course 2024",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free"
  },
  {
    id: "css",
    title: "CSS Complete Course 2024",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free"
  },
  {
    id: "javascript",
    title: "JavaScript Complete Course 2024",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free"
  },
  {
    id: "react",
    title: "React JS Complete Course 2024",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free"
  }
] as const;

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-teal-500 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Find the Best Courses for You</h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Discover, Learn, and Upskill with our wide range of courses
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <Input 
              type="search" 
              placeholder="Search Courses (e.g. HTML, CSS)" 
              className="bg-white/95"
            />
            <Button className="bg-blue-500 hover:bg-blue-600">
              Search
            </Button>
          </div>

          <Button variant="outline" className="mt-8 bg-white hover:bg-gray-100">
            Explore Courses
          </Button>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
