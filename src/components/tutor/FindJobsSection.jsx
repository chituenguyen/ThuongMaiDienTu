import React from "react";
import userIMG from "../../assets/userIMG.jpg";
import zaloIcon from "../../assets/zalo-icon.png";
import PaginationNav1Presentation from "./Pagination.jsx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../constants/common";

function RadioGroupPresentation() {
  const handleClick = (name) => {
    document.getElementById(name).scrollIntoView();
  };

  return (
    <>
      <div className="sticky top-5 left-90p bg-gray-700 rounded-md text-white m-3 p-3 w-5/12">
        <h3 className="mb-4 font-semibold text-2xl">
          Bạn cần tìm việc liên quan đến môn học nào?
        </h3>

        <div className="flex text-xl">
          <div className="flex items-center mr-4">
            <input
              id="inline-radio"
              type="radio"
              onClick={() => handleClick("math")}
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Toán
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              onClick={() => handleClick("english")}
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ngoại ngữ
            </label>
          </div>

          <div className="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              value=""
              onClick={() => handleClick("physics")}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Vật Lý
            </label>
          </div>

          <div className="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              value=""
              onClick={() => handleClick("biology")}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sinh Học
            </label>
          </div>

          <div className="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              value=""
              onClick={() => handleClick("chemistry")}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Hóa Học
            </label>
          </div>

          <div className="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              value=""
              onClick={() => handleClick("nationalExam")}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ôn Thi THPT
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

const CardJob = ({
  nameStudent,
  nameSubject,
  grade,
  timeStart,
  description,
  address,
  salary,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="find-jobs-section flex justify-center mt-5 mb-5">
      <div className="flex find-jobs-card w-7/12 bg-white border rounded-md hover:shadow-job-card">
        <div className="card-img flex-col justify-center">
          <div className="card-img rounded-md bg-gray-200 m-5 mr-25 w-card-img-w h-card-img-h max-card-img-max-w-160px">
            <img
              src={userIMG}
              alt=""
              className="w-220 max-w-160pxs hover:shadow-job-card"
            />
          </div>
          <div
            className="card-fb-zalo flex justify-center m-5 mr-25"
            style={{ cursor: "pointer" }}
          >
            <div className="flex hover:shadow-job-card border rounded-md">
              <svg
                className="inline-block w-card-fb-icon-w h-card-fb-icon-h"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
            </div>
            <div className="flex hover:shadow-job-card border rounded-md ml-5">
              <img
                src={zaloIcon}
                alt=""
                className="w-card-fb-icon-w h-card-fb-icon-h inline-block"
              />
            </div>
          </div>
        </div>
        <div className="card-context m-5 mr-25">
          <div className="card-user-name text-xl font-bold">{nameStudent}</div>

          <div className="card-user-desire-subject text-lg">{nameSubject}</div>
          <div className="card-user-desire-subject text-lg">{grade}</div>

          <div className="text-gray-600 mt-3">{timeStart}</div>

          <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className="card-user-main-context">
            <div className="card-user-descriptions text-md text-gray-600">
              {description}
            </div>

            <div className="card-user-location mt-3">
              <div>
                <svg
                  className="w-6 h-6 stroke-gray-600 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="inline-block align-text-top ml-3 text-gray-600 text-md ">
                  {address}
                </span>
              </div>
            </div>

            <div className="card-user-time">
              <div>
                <svg
                  className="w-6 h-6 stroke-gray-600 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="inline-block align-text-top ml-3 text-gray-600 text-md">
                  Tuần dạy 2 buổi
                </span>
              </div>
            </div>

            <div className="card-user-fee">
              <div>
                <svg
                  className="w-6 h-6 stroke-gray-600 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="inline-block align-text-top ml-3 text-gray-600 text-md ">
                  {salary}/tháng
                </span>
              </div>
            </div>
          </div>

          <div className="card-user-contact mt-5">
            <button
              className="focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-4 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              type="button"
              onClick={() => setShowModal(true)}
            >
              GỬI YÊU CẦU XIN VIỆC
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Gửi yêu cầu xin việc
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Bằng cách ấn vào nút xác nhận,{" "}
                          <span className="inline-block text-red-700">
                            chúng tôi sẽ gửi một yêu cầu xin việc
                          </span>{" "}
                          bao gồm bản tóm tắt thông tin của bạn đến cho vị phụ
                          huynh đã đăng yêu cầu tìm việc này. Bạn luôn có thể{" "}
                          <span className="inline-block text-red-700">
                            {" "}
                            trao đổi thêm{" "}
                          </span>{" "}
                          với phụ huynh bằng cách click vào{" "}
                          <span className="inline-block text-red-700">
                            icon Facebook hoặc Zalo
                          </span>
                          . Hãy suy nghĩ và tìm hiểu kỹ trước khi ấn xác nhận!
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Hủy bỏ
                        </button>
                        <button
                          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {}}
                        >
                          Xác nhận
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const ObjectSection = ({ objectName, id }) => {
  const [listCourse, setListCourse] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${API_URL}/course/get-open-course`);
      console.log(response?.data);
      setListCourse(response?.data);
    //   setIsloading(false);
    })();
  }, []);

  let classID = id;
  return (
    <div id={classID}>
      <div className="object-section border-2 shadow-md rounded-md m-3 bg-gray-200">
        {listCourse?.map((course) => {
          return (
            <CardJob
              key={course?.id}
              nameStudent={course?.name}
              nameSubject={course?.nameStudent}
              grade={course?.grade}
              timeStart={course?.startDate}
              description={course?.description}
              address={course?.address}
              salary={course?.salary}
            />
          );
        })}

        <div className="flex justify-center">
          <PaginationNav1Presentation />
        </div>
      </div>
    </div>
  );
};

const FindJobsSection = () => {
  let math = "TOÁN";
  let biology = "SINH HỌC";
  let physics = "VẬT LÝ";
  let english = "NGOẠI NGỮ";
  let chemistry = "HÓA HỌC";
  let nationalExam = "ÔN THI THPT";
  return (
    <>
      {/* <RadioGroupPresentation /> */}

      <ObjectSection objectName={math} id="math" />

      {/* <ObjectSection objectName={english} id="english" />

            <ObjectSection objectName={physics} id="physics" />

            <ObjectSection objectName={biology} id="biology" />

            <ObjectSection objectName={chemistry} id="chemistry" /> */}

      {/* <ObjectSection objectName={nationalExam} id="nationalExam" /> */}
    </>
  );
};

export default FindJobsSection;
