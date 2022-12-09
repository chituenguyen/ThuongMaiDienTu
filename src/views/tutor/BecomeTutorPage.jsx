import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector } from "../../redux/selectors";
import { AppContext } from "../../context/role";

import Header from "../../components/shared/Header";
import ExamBanner from "../../components/tutor/ExamBanner";
import TutorSection from "../../components/tutor/TutorSection";
import Footer from "../../components/shared/Footer";
import TutorWelcomeSection from "../../components/tutor/TutorWelcome";

function BecomeTutor() {
  const [role, setRole] = useState("None");
  const [isVerified, setIsVerified] = useState(false);
  const userInfo = useSelector(userInfoSelector);
  useEffect(() => {
    { userInfo ? console.log("User role:", userInfo.role) : console.log("not login yet") }
    { userInfo ? setRole(userInfo.role) : console.log("not login yet => not set role") }
    { userInfo ? setIsVerified(userInfo.verified) : console.log("not login yet => not set isVerified") }
    { userInfo ? setIsVerified(userInfo.verified) : console.log("not login yet => not set isVerified") }
    { userInfo ? console.log("User verified:", userInfo.verified) : console.log("not login yet => not set isVerified") }

  }, []);
  return <div>
    <Header />

    {role == "tutor" && isVerified == false
      ?
      (<>
        <ExamBanner />
        <TutorSection /></>
      )
      :
      (<TutorWelcomeSection />)
    }
    <Footer />
  </div>
}

export default BecomeTutor;
