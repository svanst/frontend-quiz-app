import { useQuizStore } from "../../QuizStore";
import Header from "../Header/Header";
import Question from "../Question/Question";
import ResultScreen from "../ResultScreen/ResultScreen";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

function Quiz() {
  const questionIndex = useQuizStore((state) => state.questionIndex);
  const status = useQuizStore((state) => state.status);

  return (
    <div>
      {status === "start" && <WelcomeScreen />}
      {status === "in-progress" && (
        <>
          <Header />
          <Question key={questionIndex} />
        </>
      )}

      {status === "completed" && <ResultScreen />}
    </div>
  );

  return <Question key={questionIndex} />;
}

export default Quiz;
