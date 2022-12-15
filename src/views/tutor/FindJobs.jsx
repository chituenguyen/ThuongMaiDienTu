import React from "react";

import Header from "../../components/shared/Header";
import ExamBanner from "../../components/tutor/ExamBanner";
import FindJobsSection from "../../components/tutor/FindJobsSection";
import Footer from "../../components/shared/Footer";
import JobList from "../../components/tutor/JobList";

function FindJobs() {
  return (
    <div>
      <Header />
      {/* <FindJobsSection/> */}
      <div className="flex flex-col bg-[#e5e7eb] mt-5 py-10">
        <div className="place-self-center w-3/5 p-5">
          <div className="text-3xl font-bold text-[#2286da] text-center pb-5">
            Các công việc đang tuyển
          </div>
          <JobList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FindJobs;
