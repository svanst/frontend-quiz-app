import { create } from "zustand";
import quizData from "./data/data.json";
import { devtools } from "zustand/middleware";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};
interface QuizStore {
  quizzes: Quiz[];
  quizIndex: number | null;
  questionIndex: number | null;
  answerIndex: number | null;
  correctAnswerIndex: number | null;
  status: "start" | "in-progress" | "completed";
  getCurrentQuiz: () => Quiz | null;
  getCurrentQuestion: () => Question | null;
  getTopics: () => string[] | null;
  submitAnswer: (index: number) => void;
}
export const useQuizStore = create<QuizStore>(
  // @ts-expect-error https://github.com/pmndrs/zustand/discussions/2168
  devtools((set, get) => ({
    quizzes: quizData.quizzes,
    quizIndex: 0,
    questionIndex: 0,
    answerIndex: null,
    correctAnswerIndex: null,
    points: 0,
    status: "start",
    getCurrentQuiz() {
      const { quizzes, quizIndex } = get();
      return quizIndex !== null ? quizzes[quizIndex] : null;
    },
    getCurrentQuestion() {
      const { quizzes, quizIndex, questionIndex } = get();
      return quizIndex !== null && questionIndex !== null
        ? quizzes[quizIndex]["questions"][questionIndex]
        : null;
    },
    getTopics() {
      const { quizzes } = get();
      return quizzes.map((quiz) => quiz.title);
    },
    submitAnswer(index: number) {
      const { points, correctAnswerIndex } = get();
      let nextPoints = points;

      if (index === correctAnswerIndex) {
        nextPoints += 1;
      }

      set((state) => {
        const quizLength = state.quizzes[state.quizIndex ?? 0].questions.length;
        const nextQuestionIndex =
          state.questionIndex !== null ? state.questionIndex + 1 : null;

        return {
          questionIndex: nextQuestionIndex,
          points: nextPoints,
          status:
            nextQuestionIndex === quizLength ? "completed" : "in-progress",
        };
      });
    },
    startQuiz(index: number) {
      set({ status: "in-progress", quizIndex: index });
    },
  }))
);
