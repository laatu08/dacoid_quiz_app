import { useEffect, useState } from "react";
import { getQuizAttempts } from "../../utils/indexedDB";
import "./History.css"; // Import CSS

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getQuizAttempts().then(setHistory);
  }, []);

  return (
    <div className="history-container">
      <h2>Quiz Attempt History 📜</h2>
      <ul className="history-list">
        {history.length > 0 ? (
          history.map((attempt, index) => (
            <li key={index} className="history-item">
              <span className="history-date">
                {new Date(attempt.date).toLocaleString()}
              </span>{" "}
              - <span className="history-score">Score: {attempt.score}/{attempt.total}</span>
            </li>
          ))
        ) : (
          <p>No quiz attempts found! 🧐</p>
        )}
      </ul>
    </div>
  );
};

export default History;
