
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const courseQuizzes: Record<string, Question[]> = {
  "html": [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tabular Markup Language",
        "None of these"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    // ... Add more questions here
  ],
  "css": [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    // ... Add more questions here
  ]
};

const courseData: Record<string, {
  title: string;
  videoUrl: string;
  resources: string[];
}> = {
  "html": {
    title: "HTML Complete Course 2024",
    videoUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
    resources: [
      "Complete HTML Documentation",
      "HTML Practice Exercises",
      "Project Files",
      "Certificate of Completion"
    ]
  },
  "css": {
    title: "CSS Complete Course 2024",
    videoUrl: "https://www.youtube.com/embed/OXGznpKZ_sA",
    resources: [
      "Complete CSS Documentation",
      "CSS Practice Exercises",
      "Project Files",
      "Certificate of Completion"
    ]
  }
};

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
        
        {/* Video Section */}
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

        {/* Quiz Section */}
        {!showQuiz && !isCompleted && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-gray-600 mb-4">
              Complete the quiz to unlock course resources. The quiz contains {questions.length} questions.
            </p>
            <Button onClick={handleStartQuiz}>Start Quiz</Button>
          </Card>
        )}

        {showQuiz && !isCompleted && questions[currentQuestion] && (
          <Card className="p-6 mb-8">
            <div className="mb-4">
              <Progress value={(currentQuestion / questions.length) * 100} />
              <p className="text-sm text-gray-600 mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="w-full justify-start text-left"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </Card>
        )}

        {/* Resources Section */}
        {isCompleted && (
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Unlocked Resources</h2>
            <div className="grid gap-4">
              {course.resources.map((resource) => (
                <Button key={resource} variant="outline" className="justify-start">
                  {resource}
                </Button>
              ))}
            </div>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
