import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector } from "../redux/selectors";
import { AppContext } from "../context/role";

import Header from "../components/Header";
import ExamBanner from "../components/ExamBanner";
import TutorSection from "../components/TutorSection";
import Footer from "../components/Footer";
import TutorWelcomeSection from "../components/TutorWelcome";

function BecomeTutor() {
  const [role, setRole] = useState("None");
  const userInfo = useSelector(userInfoSelector);
  useEffect(() => {
    {userInfo ? console.log("User role:", userInfo.role) : console.log("not login yet")}
    {userInfo ? setRole(userInfo.role) : console.log("not login yet => not set role")}
  }, []);
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
