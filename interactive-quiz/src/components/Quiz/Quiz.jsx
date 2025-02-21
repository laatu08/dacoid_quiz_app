import React, { useState } from "react";
import { quizQuestions } from "../../data/QuizQuestion";
import Timer from "../Timer/Timer";
import "./Quiz.css"; // Import the CSS file

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        if (selectedAnswer === quizQuestions[currentQuestion].answer) {
          onComplete(score + 1, quizQuestions.length);
        } else {
          onComplete(score, quizQuestions.length);
        }
      }
    }, 100);
  };

  const handleTimeUp = () => {
    onComplete(score, quizQuestions.length);
  };

  return (
    <div className="quiz-container">
      <Timer timeLimit={600} onTimeUp={handleTimeUp} />
      <h2>{quizQuestions[currentQuestion].question}</h2>
      <div className="options-container">
        {quizQuestions[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedAnswer(option)}
            className="option-button"
            
          >
            {option}
          </button>
        ))}
        <button className="submit-button" onClick={handleAnswer}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
