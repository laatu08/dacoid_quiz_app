import { useState } from "react";
import Quiz from "../../components/Quiz/Quiz";
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import { saveQuizAttempt } from "../../utils/indexedDB";
import "./QuizPage.css"; // Import CSS

const QuizPage = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [total, setTotal] = useState(0);

  const handleQuizCompletion = (score, total) => {
    setFinalScore(score);
    setTotal(total);
    setQuizCompleted(true);

    const attempt = {
      date: new Date(),
      score,
      total,
    };

    saveQuizAttempt(attempt);
  };

  return (
    <div className="quiz-page-container">
      {!quizCompleted ? (
        <div className="quiz-container">
          <Quiz onComplete={handleQuizCompletion} />
        </div>
      ) : (
        <div className="scoreboard-container">
          <ScoreBoard score={finalScore} total={total} />
        </div>
      )}
    </div>
  );
};

export default QuizPage;
