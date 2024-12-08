import { create } from "zustand";
import quizData from "./data/data.json";

type Question = {
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};

type QuizStatus = "start" | "in-progress" | "completed";

type QuizStore = {
  quizzes: Quiz[];
  quizIndex: number | null;
  questionIndex: number | null;
  answerIndex: number | null;
  correctAnswerIndex: number | null;
  points: number;
  status: QuizStatus;
  getCurrentQuiz: () => Quiz | null;
  getCurrentQuestion: () => Question | null;
  playAgain: () => void;
  startQuiz: (index: number) => void;
  submitAnswer: (index: number) => void;
};

const initialState = {
  quizzes: quizData.quizzes,
  quizIndex: null,
  questionIndex: 0,
  answerIndex: null,
  correctAnswerIndex: null,
  points: 0,
  status: "start" as QuizStatus,
};

export const useQuizStore = create<QuizStore>(
  // @ts-expect-error https://github.com/pmndrs/zustand/discussions/2168
  (set, get) => ({
    ...initialState,
    getCurrentQuiz() {
      const { quizzes, quizIndex } = get();
      return quizIndex !== null ? quizzes[quizIndex] : null;
    },
    submitAnswer(index: number) {
      const { points, quizIndex, questionIndex } = get();
      let nextPoints = points;

      if (quizIndex !== null && questionIndex !== null) {
        const correctAnswerIndex =
          quizData.quizzes[quizIndex].questions[questionIndex]
            .correctAnswerIndex;
        if (index === correctAnswerIndex) {
          nextPoints += 1;
        }
      }

      set((state) => {
        const quizLength = state.quizzes[state.quizIndex ?? 0].questions.length;
        const nextQuestionIndex =
          state.questionIndex !== null ? state.questionIndex + 1 : null;
        const nextCorrectAnswerIndex =
          nextQuestionIndex !== null && nextQuestionIndex < quizLength
            ? state.quizzes[state.quizIndex!].questions[nextQuestionIndex]
                .correctAnswerIndex
            : null;

        return {
          questionIndex: nextQuestionIndex,
          points: nextPoints,
          status:
            nextQuestionIndex === quizLength ? "completed" : "in-progress",
          correctAnswerIndex: nextCorrectAnswerIndex,
        };
      });
    },
    startQuiz(index: number) {
      set((state) => ({
        status: "in-progress",
        quizIndex: index,
        correctAnswerIndex: getCorrectAnswerIndex(state.quizzes, index, 0),
      }));
    },
    playAgain() {
      console.log("playing again");
      console.log({ initialState });
      set({ ...initialState });
    },
  }),
);

function getCorrectAnswerIndex(
  quizzes: Quiz[],
  quizIndex: number | null,
  questionIndex: number | null,
): number | null {
  if (quizIndex !== null && questionIndex !== null) {
    return quizzes[quizIndex].questions[questionIndex].correctAnswerIndex;
  }
  return null;
}
