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
      <div className="md-gap-32 md:flex">
        <p className="mb-8 flex flex-1 flex-col text-4xl md:text-6xl">
          Quiz completed. <span className="font-medium">You scored...</span>
        </p>
        <div className="flex-1">
          <div className="mb-8 flex flex-col items-center justify-center gap-6 rounded-xl bg-gray-500 p-12 font-medium">
            <span className="flex items-center gap-4">
              <TopicIcon iconKey={currentTopic} /> {currentTopic}
            </span>

            <p className="flex flex-col items-center gap-1">
              <span className="text-9xl">{points}</span>
              <span className="text-gray-300">out of {numQuestions}</span>
            </p>
          </div>

          <button
            className="w-full rounded-xl border border-primary bg-primary p-2"
            onClick={playAgain}
          >
            Play again
          </button>
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
