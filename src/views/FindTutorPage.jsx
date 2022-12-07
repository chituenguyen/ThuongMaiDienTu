import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FindTutorBanner from "../components/FindTutorBanner";
import FindTutorForm from "../components/FindTutorForm";
import ParentClassList from "../components/ParentClassList";

const FindTutors = () => {
  return (
    <div>
      <Header />
      <FindTutorBanner />
      <FindTutorForm />
      <Footer />
    </div>
  );
};

export default FindTutors;
