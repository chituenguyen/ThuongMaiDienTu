import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import './App.css';
import BecomeTutorPage from "./views/BecomeTutorPage";
import TutorQuizAttempt from "./views/TutorQuizAttempt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/become-tutor" element={<BecomeTutorPage/>}></Route>
        <Route path="/tutor-attempt-quiz" element={<TutorQuizAttempt/>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
