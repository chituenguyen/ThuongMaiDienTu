import makemoney from "../../assets/make-money.jpg";
import controltime from "../../assets/control-time.jpg";
import relationship from "../../assets/relationship.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAnswer } from "../../redux/examSlice";

function TutorSection() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [showProgessDetail, setShowProgessDetail] = React.useState(false);

  const navigate = useNavigate();
  console.log("hello");
  const { checkPost } = useSelector((state) => state.answer);
  const { roleId } = useSelector((state) => state.userLogin);
  console.log(checkPost);
  useEffect(() => {
    dispatch(checkAnswer(roleId));
  });
  return (
    <div className="tutor-section">
      <div className="tutor-intro mb-10">
        <h1 className="text-3xl mt-10 mb-7 font-bold text-blue-900 text-center">
          VÌ SAO BẠN NÊN HỢP TÁC VỚI BKTUTOR?{" "}
        </h1>
        <div className="grid grid-cols-3 ml-40 mr-40 justify-items-center">
          <div className="max-w-sm bg-cover bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="bg-cover rounded-t-lg" src={makemoney} alt="" />
            </a>
            <div className="p-5">
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                Tăng thu nhập
              </h5>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={controltime} alt="" />
            </a>
            <div className="p-5">
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                Chủ động thời gian
              </h5>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={relationship} alt="" />
            </a>
            <div className="p-5">
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                Mở rộng quan hệ
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="tutor-timeline bg-blue-500">
        <h1 className="text-3xl p-10 mb-7 font-bold text-white text-center">
          THEO DÕI TIẾN TRÌNH CỦA BẠN
        </h1>
        <div className="ml-20 mr-20">
          <ol className="items-center sm:flex">
            {/* CẬP NHẬT THÔNG TIN */}
            <li className="mb-6">
              <div className="flex items-center">
                <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-white shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>{" "}
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Cập nhật thông tin & Đăng ký thi
                </h3>
                <p className="text-base w-25 font-semibold text-gray-900 dark:text-gray-900">
                  Cập nhật đầy đủ và chính xác thông tin của bạn, điều này giúp
                  chúng tôi liên lạc với bạn dễ dàng hơn.
                </p>
              </div>
            </li>
            {/* LÀM BÀI KIỂM TRA */}
            <li className="mb-6">
              <div className="flex items-center">
                <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-white shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>{" "}
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Làm bài kiểm tra
                </h3>
                <p className="text-base font-semibold text-gray-900 dark:text-gray-900">
                  Thể hiện bản thân để nhận được công việc tốt nhất (lưu ý: bạn
                  cần tham gia đúng lịch kiểm tra để được công nhận)
                </p>
              </div>
            </li>

            {/* CHỜ XÉT DUYỆT */}
            <li className="mb-6">
              <div className="flex items-center">
                <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-white shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>{" "}
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Xét duyệt
                </h3>
                <p className="text-base font-semibold text-gray-900 dark:text-gray-900">
                  Hãy cho chúng tôi thời gian khảo thí và xét duyệt nhé, chúng
                  tôi sẽ sớm gửi kết quả cho bạn
                </p>
              </div>
            </li>

            {/* ĐÃ TRỞ THÀNH BKTUTOR */}
            <li className="mb-6">
              <div className="flex items-center">
                <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-white shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>{" "}
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Nhận lớp
                </h3>
                <p className="text-base font-semibold text-gray-900 dark:text-gray-900">
                  Tuyệt vời, giờ bạn đã là 1 thành viên của đại gia đình
                  BKTutor~
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* =============================================== */}
        {/* =============THEO DÕI TIẾN TRÌNH===============*/}
        {/* =============================================== */}
        {/* BUTTON THEO DÕI TIẾN TRÌNH */}

        <div className="flex justify-center">
          <button
            className="mb-5 focus:outline-none font-bold text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900"
            type="button"
            onClick={() => setShowProgessDetail(!showProgessDetail)}
          >
            <div>
              {" "}
              Xem chi tiết tiến trình <span> </span>
              {showProgessDetail ? (
                <svg
                  className="w-6 h-6 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  ></path>
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* CHI TIẾT TIẾN TRÌNH MESSAGE */}
        <div className="flex justify-center pb-5">
          {showProgessDetail ? (
            <>
              <div className="progess-detail bg-white rounded-lg border pb-5 w-9/12 drop-shadow-md">
                <div className="flex justify-center inline-block text-xl font-bold text-center">
                  <p>XIN CHÚC MỪNG, HIỆN TẠI BAN ĐANG Ở</p>
                  {/* GIAI ĐOẠN */}
                  <span className="inline-block text-red-600 ml-2 mr-2">
                    GIAI ĐOẠN 2
                  </span>

                  <p className="inline-block">
                    TRONG TIẾN TRÌNH TRỞ THÀNH 1 BKTUTOR
                  </p>
                </div>

                <div className="flex justify-center text-md mt-5 font-bold text-center">
                  <p className="w-7/12 ">
                    Bạn đã hoàn tất việc bổ sung hồ sơ. Tuy nhiên, bạn cần kiểm
                    tra lại danh sách thí sinh dự thi để đảm bảo rằng kết quả dự
                    thi của bạn sẽ được xử dụng để xét duyệt gia sư BKTutor
                  </p>
                </div>

                {/* LASTEST UPDATE */}
                <div className="flex justify-center text-md mt-5 font-bold text-center">
                  <p className="w-7/12 ">
                    Lần update gần đây nhất: 9:23 PM 19/11/2022
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* =================================================== */}
        {/* =============END THEO DÕI TIẾN TRÌNH===============*/}
        {/* ===================================================*/}
      </div>
      <div className="tutor-take-exam-section mt-10 mb-10">
        {checkPost ? (
          ""
        ) : (
          <>
            <h1 className="text-3xl mt-10 font-bold text-blue-900 text-center">
              KHOAN, DỪNG KHOẢNG CHỪNG 2S!!{" "}
            </h1>
            <h1 className="text-3xl font-bold text-blue-900 text-center">
              KỲ THI TUYỂN CHỌN GIA SƯ ĐANG DIỄN RA
            </h1>
            <h1 className="text-3xl mb-7 font-bold text-blue-900 text-center">
              HÃY THAM GIA THỬ SỨC NẾU BẠN MONG MUỐN TRỞ THÀNH 1 BKTUTOR!!
            </h1>

            <h1 className="text-2xl font-bold text-gray-900 text-center">
              Opened: Thứ hai, 11 Tháng mười một 2022, 10:00 AM
            </h1>
            <h1 className="text-2xl mb-7 font-bold text-gray-900 text-center">
              Closed: Thứ hai, 11 Tháng mười một 2022, 12:00 AM
            </h1>

            <div className="flex justify-center">
              <button
                className="focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                type="button"
                onClick={() => setShowModal(true)}
              >
                BẮT ĐẦU LÀM BÀI
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
                            Bắt đầu làm bài
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
                            Thời gian làm bài kiểm tra 2 giờ. Thời gian sẽ được
                            đếm ngược từ lúc bạn bắt đầu làm bài và bạn phải nộp
                            bài trước khi hết thời gian. Bạn có chắc chắn muốn
                            bắt đầu làm bài ngay bây giờ?
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
                            onClick={() => navigate("/tutor-attempt-quiz")}
                          >
                            Bắt đầu làm bài
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TutorSection;
