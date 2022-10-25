import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function ExistClass() {
  return (
    <div className="px-[68px] py-5">
      <h1 className="text-center text-3xl mb-5">CÁC LỚP HIỆN CÓ</h1>
      <div className="flex items-center gap-8">
        <BsArrowLeft className="flex-none" size={"25px"} />
        <div className="grid grid-cols-3 gap-[90px] flex-1">
          <div className="item">
            <div className="flex-center">
              <h3 className="text-xl">ANH VĂN</h3>
              <h4 className="text-red-400 text-2xl">125k/h</h4>
            </div>
            <div className="px-5 py-5">
              <p>Lớp : 12</p>
              <p>Yêu cầu kỹ năng tốt</p>
              <p>Ngày dạy : 6/7</p>
            </div>
            <button className="button-header bg-[#0E78C4] mx-8 text-white">
              Ứng tuyển ngay
            </button>
          </div>
          <div className="item">
            <div className="flex-center">
              <h3 className="text-xl">ANH VĂN</h3>
              <h4 className="text-red-400 text-2xl">125k/h</h4>
            </div>
            <div className="px-5 py-5">
              <p>Lớp : 12</p>
              <p>Yêu cầu kỹ năng tốt</p>
              <p>Ngày dạy : 6/7</p>
            </div>
            <button className="button-header bg-[#0E78C4] mx-8 text-white">
              Ứng tuyển ngay
            </button>
          </div>
          <div className="item">
            <div className="flex-center">
              <h3 className="text-xl">ANH VĂN</h3>
              <h4 className="text-red-400 text-2xl">125k/h</h4>
            </div>
            <div className="px-5 py-5">
              <p>Lớp : 12</p>
              <p>Yêu cầu kỹ năng tốt</p>
              <p>Ngày dạy : 6/7</p>
            </div>
            <button className="button-header bg-[#0E78C4] mx-8 text-white">
              Ứng tuyển ngay
            </button>
          </div>
        </div>
        <BsArrowRight size={"25px"} />
      </div>
    </div>
  );
}

export default ExistClass;
