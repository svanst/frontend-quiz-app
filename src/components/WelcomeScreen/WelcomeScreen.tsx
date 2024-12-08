import { useQuizStore } from "../../QuizStore";
import Topics from "../Topics/Topics";

function WelcomeScreen() {
  return (
    <div>
      <h1>
        Welcome to the <strong>Frontend Quiz!</strong>
      </h1>
      <p>Pick a subject to get started.</p>
      <Topics />
    </div>
  );
}

export default WelcomeScreen;
