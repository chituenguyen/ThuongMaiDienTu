import React, { useContext } from "react";
import Banner from "../components/Banner";
import Comments from "../components/Comments";
import Course from "../components/Course";
import ExistClass from "../components/ExistClass";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
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
