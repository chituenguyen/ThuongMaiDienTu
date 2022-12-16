import { Form, Input, Button, Select, Upload, Skeleton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useMemo, useState, useEffect } from "react";
import MyTutorJobsList from "./MyTutorJobsList";
import TutorSalary from "./TutorSalary";

import {
  getAllCourseOfTutor,
  getInformationOfGrade,
  getInformationOfSubject,
  getInformationOfCustomer,
  getInformationOfUser,
} from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

function TutorWelcomeSection() {
  const dispatch = useDispatch();
  const [gender, setGender] = useState();
  const [listCourse, setListCourse] = useState([]);
  const { tutor } = useSelector((state) => state.userLogin);
  useEffect(() => {
    const getListCourseOfTutor = async () => {
      const responseOfCourse = await dispatch(getAllCourseOfTutor(tutor._id));
      const listCourseAPI = responseOfCourse.payload;
      let result = [];
      listCourseAPI.forEach(async (response, idx) => {
        if (response.course) {
          let objOfResult = {
            _id: response._id,
            key: response._id,
            status: response.status,
            startDate: response.course.startDate,
            endDate: response.course.endDate,
            salary: response.course.salary,
            numberOfStudent: response.course.numberOfStudent,
            parentcmt: response.course.description,
          };
          const dataOfCustomer = await dispatch(
            getInformationOfCustomer(response.course.customer)
          );
          const dataOfGrade = await dispatch(
            getInformationOfGrade(response.course.grade)
          );
          const dataOfUser = await dispatch(
            getInformationOfUser(dataOfCustomer.payload[0].user)
          );
          let sub = [];
          response.course.subjects.forEach(async (subject) => {
            const dataOfSubject = await dispatch(
              getInformationOfSubject(subject)
            );
            sub.push(String(dataOfSubject.payload[0]?.name));
          });
          result.push({
            ...objOfResult,
            grade: String(dataOfGrade.payload[0]?.num),
            subjects: sub,
            customer: dataOfUser.payload?.user?.fullname,
          });
        }
        if (idx === listCourseAPI.length - 1) {
          setListCourse(result);
        }
      });
    };
    tutor.verified && getListCourseOfTutor();
  }, [dispatch]);
  const { TextArea } = Input;
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        setGender("male");
        return;
      case "female":
        setGender("female");
        return;
      case "other":
        setGender("other");
        break;
      default:
    }
  };

  return (
    <div className="tutor-welcome-section">
      <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900 text-center justify-items-center justify-center">
        <p>Xin chúc mừng, bạn đã trở thành một gia sư Bách Khoa chính thức!</p>
      </div>
      <div className="my-tutor-jobs-list-container m-10">
        <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900">
          <p>Danh sách công việc của tôi</p>
        </div>
        {listCourse.length === 0 ? (
          <Skeleton active />
        ) : (
          <MyTutorJobsList listCourse={listCourse} />
        )}
        <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900">
          <p>Bảng lương của tôi</p>
        </div>
        <div>
          <TutorSalary />
        </div>
      </div>
    </div>
  );
}

export default TutorWelcomeSection;
