import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
