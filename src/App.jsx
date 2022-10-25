import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import './App.css'
import BecomeTutorPage from "./BecomeTutor/BecomeTutorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/become-tutor" element={<BecomeTutorPage/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
