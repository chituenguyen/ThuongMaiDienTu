import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import FindTutorBanner from "../../components/parent/FindTutorBanner";
import FindTutorForm from "../../components/parent/FindTutorForm";
import ParentClassList from "../../components/parent/ParentClassList";

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
