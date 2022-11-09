import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import QuizAttemptSection from "../components/QuizAttemptSection";
import { useEffect } from "react";

function TutorQuizAttempt() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <div>
    <Header/>
    <QuizAttemptSection/>
    <Footer/>
  </div>
}

export default TutorQuizAttempt;
