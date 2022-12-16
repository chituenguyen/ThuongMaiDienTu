import React from "react";
import { useEffect } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/courseSlice";

function ExistClass() {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(getCourse({}));
  }, []);
  console.log(course);
  return (
    <div className="px-[68px] py-5">
      <h1 className="text-center text-3xl mb-5">CÁC LỚP HIỆN CÓ</h1>
      <div className="flex items-center gap-8">
        <BsArrowLeft className="flex-none" size={"25px"} />
        <div className="grid grid-cols-3 gap-[90px] flex-1">
          {course.map((item,key) => {
            return (
              <div className="item" key={key}>
                <div className="flex-center">
                  <h3 className="text-xl">{item.subjects[0].name}</h3>
                  <h4 className="text-red-400 text-2xl">125k/h</h4>
                </div>
                <div className="px-5 py-5">
                  <p>Lớp : {item.grade.num}</p>
                  <p>{item.description}</p>
                  <p>Ngày dạy : {item.startDate.slice(0, 10)}</p>
                </div>
                <button className="button-header bg-[#0E78C4] mx-8 text-white">
                  Ứng tuyển ngay
                </button>
              </div>
            );
          })}
        </div>
        <BsArrowRight size={"25px"} />
      </div>
    </div>
  );
}

export default ExistClass;
