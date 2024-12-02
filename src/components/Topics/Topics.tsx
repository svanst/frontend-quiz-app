import { useShallow } from "zustand/shallow";
import { useQuizStore } from "../../QuizStore";

function Topics() {
  const topics = useQuizStore(useShallow((state) => state.getTopics()));
  const startQuiz = useQuizStore((state) => state.startQuiz);

  function pickTopic(index: number) {
    startQuiz(index);
  }

  return (
    <div className="flex flex-col">
      {topics?.map((topic, i) => (
        <label>
          <input
            type="radio"
            name="topic"
            value={topic}
            onChange={() => pickTopic(i)}
          />
          {topic}
        </label>
      ))}
    </div>
  );
}

export default Topics;
