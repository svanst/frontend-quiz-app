import { useQuizStore } from "../../QuizStore";
import Header from "../Header/Header";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Question from "../Question/Question";
import ResultScreen from "../ResultScreen/ResultScreen";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

function Quiz() {
  const questionIndex = useQuizStore((state) => state.questionIndex);
  const status = useQuizStore((state) => state.status);

  return (
    <MaxWidthWrapper width="1176px">
      <Header />
      <main>
        {status === "start" && <WelcomeScreen />}
        {status === "in-progress" && <Question key={questionIndex} />}
        {status === "completed" && <ResultScreen />}
      </main>
    </MaxWidthWrapper>
  );
}

export default Quiz;
