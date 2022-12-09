import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import ParentClassList from "../../components/parent/ParentClassList";

const ParentDashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col bg-[#0E78C4] mt-5 py-10">
        <div className="place-self-center w-3/5 p-5">
          <div className="text-3xl font-bold text-white text-center pb-5">
            Các công việc đã đăng
          </div>
          <ParentClassList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ParentDashboard;
