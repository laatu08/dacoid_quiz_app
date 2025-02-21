import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Quiz App</Link>
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/quiz" className="nav-item">Quiz</Link>
          <Link to="/history" className="nav-item">History</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
