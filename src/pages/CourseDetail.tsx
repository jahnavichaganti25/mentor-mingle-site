
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { CourseQuiz } from "@/components/course/CourseQuiz";
import { CourseResources } from "@/components/course/CourseResources";
import { courseQuizzes, courseResources } from "@/data/courseData";
import { useCourses } from "@/hooks/useCourses";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { courseId = "" } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const { useCourse } = useCourses();
  const { data: course, isLoading: isLoadingCourse, error } = useCourse(courseId);
  
  const { getCourseProgress, updateProgress } = useCourseProgress();
  const { data: progress, isLoading: isLoadingProgress } = getCourseProgress(courseId);

  // Load quiz data
  const questions = courseQuizzes[courseId] || [];
  const resources = courseResources[courseId];

  // Initialize from existing progress
  useEffect(() => {
    if (progress && !isLoadingProgress) {
      if (progress.completed) {
        setIsCompleted(true);
      }
    }
  }, [progress, isLoadingProgress]);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsCompleted(false);
  };

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const newScore = isCorrect ? score + 1 : score;
      const completed = newScore >= Math.ceil(questions.length * 0.7); // 70% to pass
      setIsCompleted(completed);
      
      // Save progress to database
      if (user) {
        updateProgress({
          courseId: courseId,
          progress: Math.floor((newScore / questions.length) * 100),
          completed: completed
        });
      }

      toast({
        title: "Quiz Completed!",
        description: `You scored ${newScore} out of ${questions.length}. ${completed ? "Resources have been unlocked!" : "Try again to unlock resources."}`,
      });
    }
  };

  if (isLoadingCourse) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading course details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h2 className="text-xl mb-4">Course not found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/courses")}>
            Browse Courses
          </Button>
        </div>
        <Footer />
      </div>
    );
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
              src={course.description?.includes("youtube") 
                ? course.description 
                : "https://www.youtube.com/embed/dQw4w9WgXcQ"}
              title="Course Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {user && (
          <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-medium mb-2">Your Progress</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${progress?.progress || 0}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>{progress?.progress || 0}% complete</span>
              {progress?.completed && <span className="text-green-600">Completed</span>}
            </div>
          </div>
        )}

        {questions.length > 0 ? (
          <CourseQuiz
            currentQuestion={currentQuestion}
            questions={questions}
            onAnswer={handleAnswer}
            showQuiz={showQuiz}
            isCompleted={isCompleted}
            onStartQuiz={handleStartQuiz}
          />
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 p-4 mb-8 rounded-lg">
            <p className="text-yellow-800">Quiz for this course is coming soon!</p>
          </div>
        )}

        <CourseResources 
          resources={resources} 
          isCompleted={isCompleted || questions.length === 0} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
