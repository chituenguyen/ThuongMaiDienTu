import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import './App.css'
import BecomeTutorPage from "./views//BecomeTutor/BecomeTutorPage";
import FindTutors from "./Screen/FindTutors";
import About from "./Screen/About";
import QA from "./Screen/QA";

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
