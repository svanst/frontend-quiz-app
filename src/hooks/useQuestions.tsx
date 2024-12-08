import { useQuizStore } from "../QuizStore";
import { useQuizzes } from "./useQuizzes";

export function useQuestions() {
  const questionIndex = useQuizStore((state) => state.questionIndex);
  const { currentQuiz } = useQuizzes();

  const questions = currentQuiz?.questions;
  const currentQuestion = currentQuiz?.questions[questionIndex!];

  return {
    questions,
    currentQuestion,
    questionIndex,
    numQuestions: questions!.length,
  };
}
