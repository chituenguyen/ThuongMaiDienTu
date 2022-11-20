import React from "react";
import userIMG from "../assets/userIMG.jpg";
import zaloIcon from "../assets/zalo-icon.png";

const CardJob = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="find-jobs-section flex justify-center mt-5 mb-5">
            <div className="flex find-jobs-card w-7/12 bg-white border rounded-md hover:shadow-job-card">
                <div className="card-img flex-col justify-center">
                    <div className="card-img rounded-md bg-gray-200 m-5 mr-25 w-card-img-w h-card-img-h max-card-img-max-w-160px">
                        <img src={userIMG} alt="" className='w-220 max-w-160pxs hover:shadow-job-card' />
                    </div>
                    <div className="card-fb-zalo flex justify-center m-5 mr-25" style={{ cursor: "pointer" }}>
                        <div className="flex hover:shadow-job-card border rounded-md">
                            <svg className="inline-block w-card-fb-icon-w h-card-fb-icon-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" /></svg>

                        </div>
                        <div className="flex hover:shadow-job-card border rounded-md ml-5">
                            <img src={zaloIcon} alt="" className='w-card-fb-icon-w h-card-fb-icon-h inline-block' />

                        </div>

                    </div>


                </div>
                <div className="card-context m-5 mr-25">
                    <div className="card-user-name text-xl font-bold">
                        Nguyễn Ngọc Diệp
                    </div>

                    <div className="card-user-desire-subject text-lg">
                        Toán 11
                    </div>

                    <div className="text-gray-600 mt-3">
                        9:59 PM 20/11/2022
                    </div>

                    <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <div className="card-user-main-context">
                        <div className="card-user-descriptions text-md text-gray-600">
                            Mình cần tìm gia sư dạy toán cho bé nhà, bé chăm học nhưng hiểu hơi chậm
                        </div>

                        <div className="card-user-location mt-3">
                            <div>
                                <svg className="w-6 h-6 stroke-gray-600 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span className="inline-block align-text-top ml-3 text-gray-600 text-md ">
                                    Đông Hòa, Dĩ An, Bình Dương
                                </span>
                            </div>
                        </div>

                        <div className="card-user-time">
                            <div>
                                <svg class="w-6 h-6 stroke-gray-600 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="inline-block align-text-top ml-3 text-gray-600 text-md">
                                    Tuần dạy 2 buổi
                                </span>
                            </div>
                        </div>

                        <div className="card-user-fee">
                            <div>
                                <svg class="w-6 h-6 stroke-gray-600 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="inline-block align-text-top ml-3 text-gray-600 text-md ">
                                    1.500.000/tháng
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
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
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
                                                    Bằng cách ấn vào nút xác nhận,  <span className="inline-block text-red-700">chúng tôi sẽ gửi một yêu cầu xin việc</span> bao gồm bản tóm tắt thông tin của bạn
                                                    đến cho vị phụ huynh đã đăng yêu cầu tìm việc này. Bạn luôn có thể <span className="inline-block text-red-700"> trao đổi thêm </span> với phụ huynh bằng cách click
                                                    vào <span className="inline-block text-red-700">icon Facebook hoặc Zalo</span>.
                                                    Hãy suy nghĩ và tìm hiểu kỹ trước khi ấn xác nhận!
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
                                                    onClick={() => { }}
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
    )
}

const ObjectSection = ({ objectName }) => {
    return (
        <div className='object-section border-2 shadow-md rounded-md m-3 bg-gray-200'>
            <div className="object-title-section">
                <div className="text-4xl font-extrabold m-5">MÔN {objectName}</div>
            </div>

            <CardJob />

            <CardJob />

        </div>
    )
}

const FindJobsSection = () => {
    let math = "TOÁN";
    let biology = "SINH HỌC";
    let physics = "VẬT LÝ";
    let english = "ANH VĂN";

    return (
        <>
            <ObjectSection objectName={math} />

            <ObjectSection objectName={english} />

            <ObjectSection objectName={physics} />

            <ObjectSection objectName={biology} />

        </>
    );
};

export default FindJobsSection;