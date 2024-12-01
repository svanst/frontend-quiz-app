import { useQuizStore } from "../../QuizStore";
import Question from "../Question/Question";

function Quiz() {
  const questionIndex = useQuizStore((state) => state.questionIndex);
  return <Question key={questionIndex} />;
}

export default Quiz;
