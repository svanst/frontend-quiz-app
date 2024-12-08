import { useTopics } from "../../hooks/useTopics";
import TopicIcon from "../TopicIcon/TopicIcon";

function Header() {
  const { currentTopic } = useTopics();
  return (
    <header>
      <TopicIcon iconKey={currentTopic} /> {currentTopic}
    </header>
  );
}

export default Header;
