import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import BecomeTutorPage from "./views/BecomeTutorPage";
import FindTutors from "./views/FindTutorPage";
import About from "./views/AboutPage";
import QA from "./views/QAPage";
import TutorQuizAttempt from "./views/TutorQuizAttempt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/become-tutor" element={<BecomeTutorPage />}></Route>
        <Route path="/tutor-attempt-quiz" element={<TutorQuizAttempt />}></Route>
        <Route path="/find-tutor" element={<FindTutors />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/qa" element={<QA />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
