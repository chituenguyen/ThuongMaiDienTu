import React from "react";

import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import QuizAttemptSection from "../../components/tutor/QuizAttemptSection";
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
