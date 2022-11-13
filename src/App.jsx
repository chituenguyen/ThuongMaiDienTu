import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomeScreen from "./views/Home/HomePage";
import BecomeTutorPage from "./views/BecomeTutor/BecomeTutorPage";
import FindTutors from "./views/FindTutor/FindTutorPage";
import About from "./views/About/AboutPage";
import QA from "./views/QA/QAPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/become-tutor" element={<BecomeTutorPage/>}></Route>
        <Route path="/find-tutor" element={<FindTutors/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/qa" element={<QA/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
