
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { HTMLProps, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, StarHalf } from "lucide-react";

interface CourseCardProps extends HTMLProps<HTMLDivElement> {
  id: string;
  title: string;
  logo: string;
  instructor: string;
  level: "Beginner" | "Advance";
  price: string;
  rating?: number;
  students?: number;
  description?: string;
}

const CourseCard = ({ 
  id, 
  title, 
  logo, 
  instructor, 
  level, 
  price, 
  rating = 4.5, 
  students = Math.floor(Math.random() * 1000) + 100,
  description = "Learn everything you need to know about web development"
}: CourseCardProps) => (
  <Link to={`/course/${id}`}>
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className="p-6 space-y-4 flex flex-col h-full">
        <div className="flex-1">
          <img src={logo} alt={title} className="w-24 h-24 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between mb-3">
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
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              {rating % 1 !== 0 && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
            </div>
            <span className="text-sm text-gray-600">{rating}</span>
            <span className="text-sm text-gray-500">({students} students)</span>
          </div>
        </div>

        <div className="pt-4 border-t mt-auto">
          <span className="font-bold text-lg">{price}</span>
        </div>
      </div>
    </Card>
  </Link>
);

const courses = [
  {
    id: "intro-programming",
    title: "Introduction to Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.7,
    description: "Learn the fundamentals of programming and computational thinking"
  },
  {
    id: "c",
    title: "C Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.8,
    description: "Master C programming from basics to advanced concepts"
  },
  {
    id: "python",
    title: "Python Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.9,
    description: "Learn Python programming with hands-on projects and exercises"
  },
  {
    id: "java",
    title: "Java Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.7,
    description: "Comprehensive Java programming from fundamentals to advanced topics"
  },
  {
    id: "cpp",
    title: "C++ Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.6,
    description: "Learn object-oriented programming with C++"
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.8,
    description: "Master essential data structures and algorithms"
  },
  {
    id: "sql",
    title: "SQL Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.5,
    description: "Learn SQL for database management and manipulation"
  },
  {
    id: "html-css",
    title: "HTML and CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.8,
    description: "Master web development fundamentals with HTML and CSS"
  },
  {
    id: "react",
    title: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.7,
    description: "Build modern web applications with React and its ecosystem"
  },
  {
    id: "angular",
    title: "Angular.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.5,
    description: "Learn Angular for building enterprise web applications"
  },
  {
    id: "nodejs",
    title: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.6,
    description: "Server-side JavaScript for building scalable applications"
  },
  {
    id: "expressjs",
    title: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.5,
    description: "Build web APIs and applications with Express.js"
  },
  {
    id: "mongodb",
    title: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.6,
    description: "Learn NoSQL database design and development"
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.8,
    description: "Introduction to machine learning algorithms and applications"
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.9,
    description: "Learn to build AI systems that generate content"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.7,
    description: "Design user interfaces and experiences for web and mobile"
  },
  {
    id: "power-bi",
    title: "Power BI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.6,
    description: "Create powerful data visualizations and business insights"
  },
  {
    id: "data-science",
    title: "Data Science",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.8,
    description: "Analyze and interpret complex data to inform decision making"
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    instructor: "CourseMate",
    level: "Advance",
    price: "₹Free",
    rating: 4.9,
    description: "Advanced neural networks and deep learning architectures"
  },
  {
    id: "javascript",
    title: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    instructor: "CourseMate",
    level: "Beginner",
    price: "₹Free",
    rating: 4.7,
    description: "Master JavaScript for client-side web development"
  }
] as const;

const Courses = () => {
  const [sortBy, setSortBy] = useState<string>("popular");
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAndSortedCourses = [...courses]
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = filterLevel === "all" || course.level === filterLevel;
      return matchesSearch && matchesLevel;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "title":
          return a.title.localeCompare(b.title);
        default: // "popular"
          return b.rating - a.rating;
      }
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-teal-500 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Find the Best Courses for You</h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Discover, Learn, and Upskill with our wide range of courses
          </p>
          
          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex gap-2">
              <Input 
                type="search" 
                placeholder="Search Courses (e.g. HTML, CSS)" 
                className="bg-white/95"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="bg-blue-500 hover:bg-blue-600">
                Search
              </Button>
            </div>

            <div className="flex gap-4 justify-center">
              <Select value={filterLevel} onValueChange={setFilterLevel}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Filter by Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Advance">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="title">Course Title</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAndSortedCourses.map((course) => (
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
