
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb } from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="space-y-8">
      {/* Abstract Section */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">What is CourseMate?</h2>
          <p className="text-muted-foreground">
            CourseMate is an innovative online platform designed to empower students, especially freshers and those new to the world of Computer Science, by providing easy access to quality learning resources and placement preparation materials.
          </p>
          <p className="text-muted-foreground">
            As many students are unsure where to start or which resources to trust, CourseMate bridges this gap by offering a one-stop solution for learning, quiz assessments, and job placement preparation.
          </p>
          <p className="text-muted-foreground">
            The platform is specifically tailored to help students who are just beginning their journey in Computer Science or those who are looking to enhance their skills for career success.
          </p>
        </CardContent>
      </Card>

      {/* Motto & Goals */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-primary mb-4">
              <Target className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
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
            <p className="text-muted-foreground">
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
            <p className="text-muted-foreground">
              Quality education, student success, continuous improvement, and community support
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
