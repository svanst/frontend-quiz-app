import { create } from "zustand";
import quizData from "./data/data.json";

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
  status: "ready" | "in-progress" | "completed";
  getCurrentQuiz: () => Quiz | null;
  getCurrentQuestion: () => Question | null;
  submitAnswer: (index: number) => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  quizzes: quizData.quizzes,
  quizIndex: 0,
  questionIndex: 0,
  answerIndex: null,
  correctAnswerIndex: null,
  status: "ready",
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
  submitAnswer(index: number) {
    set((state) => {
      const nextQuestionIndex =
        state.questionIndex !== null ? state.questionIndex + 1 : null;

      return { questionIndex: nextQuestionIndex };
    });
  },
}));
