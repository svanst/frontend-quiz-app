import { useQuestions } from "../../hooks/useQuestions";
import { useTopics } from "../../hooks/useTopics";
import { useQuizStore } from "../../QuizStore";
import TopicIcon from "../TopicIcon/TopicIcon";

function ResultScreen() {
  const points = useQuizStore((state) => state.points);
  const playAgain = useQuizStore((state) => state.playAgain);
  const { currentTopic } = useTopics();
  const { numQuestions } = useQuestions();
  return (
    <>
      <span>
        <TopicIcon iconKey={currentTopic} /> {currentTopic}
      </span>
      <p>Quiz completed. You scored...</p>
      <p>
        {points} out of {numQuestions}
      </p>
      <button onClick={playAgain}>Play again</button>
    </>
  );
}

export default ResultScreen;
