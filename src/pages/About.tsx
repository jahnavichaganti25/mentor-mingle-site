
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">About CourseMate</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering students and freshers in Computer Science with quality learning resources and placement preparation materials
            </p>
          </div>

          {/* Motto & Goals */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="text-primary mb-4">
                  <Target className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide accessible, high-quality education and career preparation resources to computer science students worldwide
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-primary mb-4">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading platform for computer science education and placement preparation, helping students achieve their career goals
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-primary mb-4">
                  <Lightbulb className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Quality education, student success, continuous improvement, and community support
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Abstract Section */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">What is CourseMate?</h2>
              <p className="text-gray-600">
                CourseMate is an innovative online platform designed to empower students, especially freshers and those new to the world of Computer Science, by providing easy access to quality learning resources and placement preparation materials.
              </p>
              <p className="text-gray-600">
                As many students are unsure where to start or which resources to trust, CourseMate bridges this gap by offering a one-stop solution for learning, quiz assessments, and job placement preparation.
              </p>
              <p className="text-gray-600">
                The platform is specifically tailored to help students who are just beginning their journey in Computer Science or those who are looking to enhance their skills for career success.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
