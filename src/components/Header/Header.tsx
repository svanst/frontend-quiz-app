import { useTopics } from "../../hooks/useTopics";
import TopicIcon from "../TopicIcon/TopicIcon";

function Header() {
  const { currentTopic } = useTopics();

  return (
    <header className="mb-12 flex min-h-14 items-center gap-4">
      {currentTopic !== null && (
        <>
          <TopicIcon iconKey={currentTopic} /> {currentTopic}
        </>
      )}
    </header>
  );
}

export default Header;
