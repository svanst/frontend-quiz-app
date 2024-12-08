import { useState } from "react";
import { useQuizStore } from "../../QuizStore";
import { useQuestions } from "../../hooks/useQuestions";
import { Check, CircleCheck, CircleX, Cross } from "lucide-react";

const indexToLetter = (index: number) => String.fromCharCode(65 + index);

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
    <>
      <div>
        <p>
          Question {(questionIndex ?? 0) + 1} of {numQuestions}{" "}
        </p>
        <h3>{question}</h3>
        <progress
          max={numQuestions}
          value={(questionIndex ?? 0) + Number(selectedAnswerIndex !== null)}
        />
      </div>
      <div className="flex flex-col">
        {options.map((option, index) => {
          const isGivenAnswer = index === selectedAnswerIndex;
          const isCorrectOption = index === correctAnswerIndex;

          let labelClass = "";
          if (isGivenAnswer) {
            labelClass = isCorrectOption
              ? "answer--correct"
              : "answer--incorrect";
          }

          return (
            <label key={index} className={labelClass}>
              <span>{indexToLetter(index)}</span>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={() => setSelectedAnswerIndex(index)}
                disabled={selectedAnswerIndex !== null}
              />
              {option}
              {selectedAnswerIndex !== null && (
                <OptionIcon
                  isCorrectOption={isCorrectOption}
                  isGivenAnswer={isGivenAnswer}
                />
              )}
            </label>
          );
        })}
      </div>
      <button className="border border-black p-2" onClick={handleSubmit}>
        {selectedAnswerIndex == null ? "Submit Answer" : "Next Question"}
      </button>
      {showValidationFeedback && (
        <>
          <CircleX /> Please select an answer
        </>
      )}
    </>
  );
}

function OptionIcon({ isCorrectOption, isGivenAnswer }) {
  if (isCorrectOption) {
    return <CircleCheck color="#26d782" />;
  } else if (isGivenAnswer) {
    return <CircleX />;
  }
}

export default Question;
