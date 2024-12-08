import { useQuizStore } from "../QuizStore";

export function useQuizzes() {
  const quizzes = useQuizStore((state) => state.quizzes);
  const quizIndex = useQuizStore((state) => state.quizIndex);

  let currentQuiz;

  if (quizIndex !== null) {
    currentQuiz = quizzes[quizIndex];
  }

  return { quizzes, quizIndex, currentQuiz };
}
