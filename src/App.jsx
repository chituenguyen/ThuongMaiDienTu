import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/role";
import HomePage from "./views/HomePage";
import BecomeTutorPage from "./views/tutor/BecomeTutorPage";
import FindTutors from "./views/parent/FindTutorPage";
import About from "./views/AboutPage";
import QA from "./views/QAPage";
import TutorQuizAttempt from "./views/tutor/TutorQuizAttempt";
import FindJobs from "./views/tutor/FindJobs";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import ParentDashboard from "./views/parent/ParentDashboard";
import ExamDateList from "./views/Tutor/ExamDateList";
import Profile from "./views/Profile";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/qa" element={<QA />}></Route>

          <Route path="/become-tutor" element={<BecomeTutorPage />}></Route>
          <Route path="/find-jobs" element={<FindJobs />}></Route>
          <Route
            path="/tutor-attempt-quiz"
            element={<TutorQuizAttempt />}
          ></Route>

          <Route path="/find-tutor" element={<FindTutors />}></Route>
          <Route path="/parent-dashboard" element={<ParentDashboard />}></Route>
          <Route path="/exam-schedule" element={<ExamDateList />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
