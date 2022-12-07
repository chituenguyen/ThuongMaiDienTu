import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParentClassList from "../components/ParentClassList";

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
