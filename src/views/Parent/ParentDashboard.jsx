import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import ParentClassList from "../../components/parent/ParentClassList";

const ParentDashboard = () => {
  return (
    <div>
      <Header />
      <ParentClassList />
      <Footer />
    </div>
  );
};

export default ParentDashboard;
