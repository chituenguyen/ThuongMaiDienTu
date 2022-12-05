import React, { useContext } from "react";
import { AppContext } from "../context/role";

import Header from "../components/Header";
import ExamBanner from "../components/ExamBanner";
import TutorSection from "../components/TutorSection";
import Footer from "../components/Footer";
import TutorWelcomeSection from "../components/TutorWelcome";

function BecomeTutor() {
  const { role, setRole } = useContext(AppContext);
  return <div>
    <Header/>
    <ExamBanner/>
    {role == "tutor" 
      ?
      (<TutorSection/>)
      :
      (<TutorWelcomeSection/>)
    }
    <Footer/>
  </div>
}

export default BecomeTutor;
