import { useQuizStore } from "../../QuizStore";
import Topics from "../Topics/Topics";

function WelcomeScreen() {
  return (
    <div>
      <h1>Welcome</h1>
      <Topics />
    </div>
  );
}

export default WelcomeScreen;
