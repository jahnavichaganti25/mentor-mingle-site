
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { HTMLProps, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, StarHalf } from "lucide-react";
import { useCourses } from "@/hooks/useCourses";
import { CourseWithDetails } from "@/types/database";

interface CourseCardProps extends HTMLProps<HTMLDivElement> {
  course: CourseWithDetails;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const {
    id,
    title,
    logo,
    image_url,
    description,
    category,
    instructor = "CourseMate",
    level = "Beginner",
    price = "₹Free",
    rating = 4.5,
    students = Math.floor(Math.random() * 1000) + 100
  } = course;

  return (
    <Link to={`/course/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className="p-6 space-y-4 flex flex-col h-full">
          <div className="flex-1">
            <img 
              src={image_url || logo} 
              alt={title} 
              className="w-24 h-24 mx-auto mb-4"
              onError={(e) => {
                // Fallback if image fails
                const target = e.target as HTMLImageElement;
                target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg";
              }}
            />
            <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description || "Learn valuable skills with this course"}</p>
            
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
};

const Courses = () => {
  const [sortBy, setSortBy] = useState<string>("popular");
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const { useCoursesList } = useCourses();
  const { data: coursesData, isLoading, error } = useCoursesList();

  const filteredAndSortedCourses = (coursesData || [])
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (course.description?.toLowerCase() || "").includes(searchQuery.toLowerCase());
      const matchesLevel = filterLevel === "all" || course.level === filterLevel;
      return matchesSearch && matchesLevel;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "title":
          return a.title.localeCompare(b.title);
        default: // "popular"
          return (b.rating || 0) - (a.rating || 0);
      }
    });

  if (isLoading) {
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

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Error loading courses. Please try again later.</p>
        </div>
        <Footer />
      </div>
    );
  }

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
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredAndSortedCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No courses match your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
