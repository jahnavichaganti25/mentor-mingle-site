
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/types/course";

interface CourseQuizProps {
  currentQuestion: number;
  questions: Question[];
  onAnswer: (answer: string) => void;
  showQuiz: boolean;
  isCompleted: boolean;
  onStartQuiz: () => void;
}

export const CourseQuiz = ({
  currentQuestion,
  questions,
  onAnswer,
  showQuiz,
  isCompleted,
  onStartQuiz,
}: CourseQuizProps) => {
  if (!showQuiz && !isCompleted) {
    return (
      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ready to Test Your Knowledge?</h2>
        <p className="text-gray-600 mb-4">
          Complete the quiz to unlock course resources. The quiz contains {questions.length} questions.
        </p>
        <Button onClick={onStartQuiz}>Start Quiz</Button>
      </Card>
    );
  }

  if (showQuiz && !isCompleted && questions[currentQuestion]) {
    return (
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
              onClick={() => onAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </Card>
    );
  }

  return null;
};
