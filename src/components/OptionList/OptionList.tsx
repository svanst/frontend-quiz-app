import { CircleCheck, CircleX } from "lucide-react";

interface OptionListProps {
  options: string[];
  selectedAnswerIndex: number | null;
  correctAnswerIndex: number | null;
  setSelectedAnswerIndex: (index: number) => void;
  indexToLetter: (index: number) => string;
}

function OptionList({
  options,
  selectedAnswerIndex,
  correctAnswerIndex,
  setSelectedAnswerIndex,
}: OptionListProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 font-medium">
      {options.map((option, index) => {
        const isGivenAnswer = index === selectedAnswerIndex;
        const isCorrectOption = index === correctAnswerIndex;

        let labelClass = "";
        if (isGivenAnswer) {
          console.log("setting labelclass");
          labelClass = isCorrectOption ? "border-success" : "border-danger";
        } else {
          labelClass = "border-transparent";
        }

        if (selectedAnswerIndex === null) {
          labelClass += " hover:border-primary"; // only show border on hover when no answer has been picked yet
        }

        return (
          <label
            key={index}
            className={`${labelClass} flex cursor-pointer items-center gap-4 rounded-xl border-2 bg-gray-500 p-3`}
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded bg-gray-200 text-gray-800">
              {indexToLetter(index)}
            </span>
            <input
              className="hidden"
              type="radio"
              name="answer"
              value={option}
              onChange={() => setSelectedAnswerIndex(index)}
              disabled={selectedAnswerIndex !== null}
            />
            {option}
            {selectedAnswerIndex !== null && (
              <OptionIcon
                className="ml-auto"
                isCorrectOption={isCorrectOption}
                isGivenAnswer={isGivenAnswer}
              />
            )}
          </label>
        );
      })}
    </div>
  );
}

const indexToLetter = (index: number) => String.fromCharCode(65 + index);

function OptionIcon({ isCorrectOption, isGivenAnswer, className }) {
  if (isCorrectOption) {
    return <CircleCheck className={`${className} text-success`} />;
  } else if (isGivenAnswer) {
    return <CircleX className={`${className} text-danger`} />;
  }
}

export default OptionList;
