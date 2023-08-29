import { useState } from "react";
import questions from "./Questions";
import Timer from "./Timer";
// import Startpage from "../pages/Home/Startpage";

const Test = () => {
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [testActive, setTestActive] = useState(true);

  const finalQuestion = currentQues === questions.length - 1;

  const targetTime = 30;

  const handleNext = () => {
    const nextQuestion = currentQues + 1;
    if (nextQuestion < questions.length) {
      setCurrentQues(nextQuestion);
    } else {
      setTestActive(false);
      // alert("You've reached the end of the quiz");
    }
  };

  const handlePrevious = () => {
    const prevQuestion = currentQues - 1;
    if (prevQuestion >= 0) {
      setCurrentQues(prevQuestion);
    } else {
      alert("You've reached the beginning of the quiz");
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      const computeScore = score + 1;
      setScore(computeScore);
    }
  };

  const handleTimerExpired = () => {
    setTestActive(false);
    handleAnswer();
  };

  return (
    <div className="bg-red-600 h-60">
      {/* <Startpage /> */}
      <Timer targetTime={targetTime} onTimeExpired={handleTimerExpired} />

      {testActive ? (
        <div>
          <div>
            <h1 className="font-medium mb-2">
              Question {currentQues + 1} of {questions.length}{" "}
            </h1>
            <div className="question">
              {questions[currentQues].questionText}
            </div>
            <ul className="answer-section">
              {questions[currentQues].answerOptions.map(
                (answerOption, index) => (
                  <li
                    key={index}
                    onClick={() => handleAnswer(answerOption.isCorrect)}
                  >
                    {/* <input type="radio" name="" id="" className="mr-2" /> */}
                    {answerOption.answerText}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex justify-center space-x-8">
            {currentQues > 0 && (
              <button
                onClick={handlePrevious}
                className="px-3 py-2 rounded-lg bg-emerald-600"
              >
                Prev
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-3 py-2 rounded-lg bg-emerald-600"
            >
              {finalQuestion ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="score flex justify-center items-center">
          Your score is {score}.
        </div>
      )}
    </div>
  );
};

export default Test;
