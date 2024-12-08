import { useQuizStore } from "../../QuizStore";
import Topics from "../Topics/Topics";

function WelcomeScreen() {
  return (
    <div className="flex flex-col gap-x-32 gap-y-10 md:flex-row">
      <div className="flex-1">
        <h1 className="mb-4 flex flex-col text-4xl md:text-6xl">
          Welcome to the <strong>Frontend Quiz!</strong>
        </h1>
        <p className="italic text-gray-300">Pick a subject to get started.</p>
      </div>
      <div className="flex-1">
        <Topics />
      </div>
    </div>
  );
}

export default WelcomeScreen;
