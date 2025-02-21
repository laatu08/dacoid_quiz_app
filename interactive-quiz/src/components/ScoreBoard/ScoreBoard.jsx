import React from "react";
import "./ScoreBoard.css"; // Import CSS

const ScoreBoard = ({ score, total }) => {

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="scoreboard-container">
      <h2>Quiz Completed! 🎉</h2>
      <p>Your Score: {score} / {total}</p>
      
      <button className="retry-button" onClick={handleRetry}>Re-Attempt</button>
    </div>
  );
};

export default ScoreBoard;
