import { useState } from "react";
import { useQuizStore } from "../../QuizStore";
import { useQuestions } from "../../hooks/useQuestions";
import { CircleX } from "lucide-react";
import OptionList from "../OptionList/OptionList";

function Question() {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showValidationFeedback, setShowValidationFeedback] = useState(false);
  const { numQuestions, questionIndex, currentQuestion } = useQuestions();
  const submitAnswer = useQuizStore((state) => state.submitAnswer);

  const handleSubmit = () => {
    if (selectedAnswerIndex !== null) {
      submitAnswer(selectedAnswerIndex);
    } else {
      setShowValidationFeedback(true);
    }
  };

  const { question, options, correctAnswerIndex } = currentQuestion;

  return (
    <div className="md:flex md:gap-32">
      <div className="flex-1">
        <p className="mb-4 text-sm italic text-gray-300">
          Question {(questionIndex ?? 0) + 1} of {numQuestions}{" "}
        </p>
        <h3 className="mb-10 text-2xl font-medium">{question}</h3>
        <progress
          max={numQuestions}
          value={(questionIndex ?? 0) + Number(selectedAnswerIndex !== null)}
          className="mb-12 h-2 w-full rounded"
        />
      </div>
      <div className="flex-1">
        <OptionList
          options={options}
          selectedAnswerIndex={selectedAnswerIndex}
          correctAnswerIndex={correctAnswerIndex}
          setSelectedAnswerIndex={setSelectedAnswerIndex}
        />

        <button
          className="w-full rounded-xl border border-primary bg-primary p-2"
          onClick={handleSubmit}
        >
          {selectedAnswerIndex == null
            ? "Submit Answer"
            : questionIndex === numQuestions - 1
              ? "Show Results"
              : "Next Question"}
        </button>
        {showValidationFeedback && (
          <div className="mt-4 flex justify-center gap-3 text-danger">
            <CircleX /> Please select an answer
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
