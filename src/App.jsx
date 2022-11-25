import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import BecomeTutorPage from "./views/BecomeTutorPage";
import FindTutors from "./views/FindTutorPage";
import About from "./views/AboutPage";
import QA from "./views/QAPage";
import TutorQuizAttempt from "./views/TutorQuizAttempt";
import FindJobs from "./views/FindJobs";
import { AppProvider } from "./context/role";
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/become-tutor" element={<BecomeTutorPage />}></Route>
          <Route
            path="/tutor-attempt-quiz"
            element={<TutorQuizAttempt />}
          ></Route>
          <Route path="/find-tutor" element={<FindTutors />}></Route>
          <Route path="/find-jobs" element={<FindJobs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/qa" element={<QA />}></Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
