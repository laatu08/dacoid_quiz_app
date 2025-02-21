import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Quiz App 🎯</h1>
      <p>Test your knowledge with exciting quizzes! 🚀</p>
      
      <ul className="instructions">
        <li>The quiz will of 10 minutes.</li>
        <li>All questions are MCQs based.</li>
        <li>All questions are compulsory.</li>
        <li>Your attempt history will be saved.</li>
        <li>All the Best.</li>
      </ul>

      <button onClick={() => navigate("/quiz")} className="start-button">
        Start Quiz 🎮
      </button>
    </div>
  );
};

export default Home;
