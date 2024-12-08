import { useTopics } from "../../hooks/useTopics";
import { useQuizStore } from "../../QuizStore";

function Topics() {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const { topics } = useTopics();

  function pickTopic(index: number) {
    startQuiz(index);
  }

  return (
    <div className="flex flex-col">
      {topics?.map((topic, i) => (
        <label key={topic}>
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
