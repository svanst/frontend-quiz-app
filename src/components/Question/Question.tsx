import { useState } from "react";
import { useQuizStore } from "../../QuizStore";

function Question() {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const currentQuestion = useQuizStore((state) => state.getCurrentQuestion());
  const submitAnswer = useQuizStore((state) => state.submitAnswer);

  const handleSubmit = () => {
    if (selectedAnswerIndex !== null) {
      submitAnswer(selectedAnswerIndex);
    }
  };

  return (
    <>
      <h3>{currentQuestion?.question}</h3>
      <div className="flex flex-col">
        {currentQuestion?.options.map((option, index) => (
          <label>
            <input
              type="radio"
              name="answer"
              value={option}
              id=""
              onChange={() => setSelectedAnswerIndex(index)}
            />
            {option}
          </label>
        ))}
      </div>
      <button className="border border-black p-2" onClick={handleSubmit}>
        Submit Answer
      </button>
    </>
  );
}

export default Question;
