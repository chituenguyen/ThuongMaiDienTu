import React, { useContext } from "react";
import Banner from "../components/shared/Banner";
import Comments from "../components/shared/Comments";
import Course from "../components/shared/Course";
import ExistClass from "../components/shared/ExistClass";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Intro from "../components/shared/Intro";
import { AppContext } from "../context/role";

function HomePage() {
  const { role, setRole } = useContext(AppContext);

  return (
    <div>
      <Header />
      {role === "None" && <Banner />}
      {role === "None" && <Intro />}
      <Course />
      <ExistClass />
      <Comments />
      <Footer />
    </div>
  );
}

export default HomePage;
