
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { CourseQuiz } from "@/components/course/CourseQuiz";
import { CourseResources } from "@/components/course/CourseResources";
import { courseData, courseQuizzes, courseResources } from "@/data/courseData";

const CourseDetail = () => {
  const { courseId = "html" } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const course = courseData[courseId];
  const questions = courseQuizzes[courseId] || [];
  const resources = courseResources[courseId];

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      toast({
        title: "Quiz Completed!",
        description: `You scored ${score + 1} out of ${questions.length}. Resources have been unlocked!`,
      });
    }
  };

  if (!course) {
    navigate("/courses");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{course.title}</h1>
        
        <div className="mb-8">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={course.videoUrl}
              title="Course Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <CourseQuiz
          currentQuestion={currentQuestion}
          questions={questions}
          onAnswer={handleAnswer}
          showQuiz={showQuiz}
          isCompleted={isCompleted}
          onStartQuiz={handleStartQuiz}
        />

        <CourseResources 
          resources={resources} 
          isCompleted={isCompleted} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
