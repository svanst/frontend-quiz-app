import { useQuizStore } from "../QuizStore";

export function useTopics() {
  const quizzes = useQuizStore((state) => state.quizzes);
  const quizIndex = useQuizStore((state) => state.quizIndex);
  const topics = quizzes.map((quiz) => quiz.title);

  let currentTopic = null;
  if (quizIndex !== null) {
    currentTopic = quizzes[quizIndex].title;
  }

  return { topics, currentTopic };
}