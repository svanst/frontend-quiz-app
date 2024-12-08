import { useTopics } from "../../hooks/useTopics";
import { useQuizStore } from "../../QuizStore";
import TopicIcon, { IconKey } from "../TopicIcon/TopicIcon";

function Topics() {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const { topics } = useTopics();

  function pickTopic(index: number) {
    startQuiz(index);
  }

  return (
    <div className="flex flex-col gap-3 font-medium">
      {topics?.map((topic, i) => (
        <label
          key={topic}
          className="hover:border-primary-500 flex cursor-pointer items-center gap-4 rounded-xl border-2 border-transparent bg-gray-500 p-4"
        >
          <TopicIcon iconKey={topic as IconKey} />
          <input
            className="hidden"
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
