import logo from "../assets/image-1.jpg";
function TutorSection() {
    return (
        <div className="tutor-section">
            <div className="tutor-intro mb-10">
                <h1 className='text-3xl mt-10 mb-7 font-bold text-blue-400 text-center'>VÌ SAO BẠN NÊN HỢP TÁC VỚI BKTUTOR? </h1>
                <div className="grid grid-cols-3 ml-40 mr-40 justify-items-center">
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={logo} alt="" />
                        </a>
                        <div className="p-5">
                            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Tăng thu nhập</h5>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={logo} alt="" />
                        </a>
                        <div className="p-5">
                            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Chủ động thời gian</h5>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={logo} alt="" />
                        </a>
                        <div className="p-5">
                            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Mở rộng quan hệ</h5>
                        </div>
                    </div>
                </div>


            </div>
            <div className="tutor-timeline bg-blue-500">
                <h1 className='text-3xl p-10 mb-7 font-bold text-white text-center'>THEO DÕI TIẾN TRÌNH CỦA BẠN</h1>
                <div className="ml-20 mr-20">
                    <ol className="items-center sm:flex">
                        <li className="mb-6">
                            <div className="flex items-center">
                                <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-white shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Cập nhật thông tin</h3>
                                <p className="text-base font-semibold text-gray-900 dark:text-gray-900">Cập nhật đầy đủ và chính xác thông tin của bạn, điều này giúp chúng tôi liên lạc với bạn dễ dàng hơn</p>

                            </div>
                        </li>
                        <li className="mb-6">
                            <div className="flex items-center">
                                <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-white shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Làm bài kiểm tra</h3>
                                <p className="text-base font-semibold text-gray-900 dark:text-gray-900">Thể hiện bản thân để nhận được công việc tốt nhất (lưu ý: bạn cần tham gia đúng lịch kiểm tra để được công nhận)</p>
                            </div>
                        </li>
                        <li className="mb-6">
                            <div className="flex items-center">
                                <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-white shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Xét duyệt</h3>
                                <p className="text-base font-semibold text-gray-900 dark:text-gray-900">Hãy cho chúng tôi thời gian khảo thí và xét duyệt nhé, chúng tôi sẽ sớm gửi kết quả cho bạn</p>
                            </div>
                        </li>
                        <li className="mb-6">
                            <div className="flex items-center">
                                <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-white shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nhận lớp</h3>
                                <p className="text-base font-semibold text-gray-900 dark:text-gray-900">Tuyệt vời, giờ bạn đã là 1 thành viên của đại gia đình BKTutor~</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="tutor-take-exam-section mt-10 mb-10">
                <h1 className='text-3xl mt-10 font-bold text-blue-900 text-center'>KHOANNN, DỪNG KHOẢNG CHỪNG 2S!! </h1>
                <h1 className='text-3xl font-bold text-blue-900 text-center'>KỲ THI TUYỂN CHỌN GIA SƯ ĐANG DIỄN RA</h1>
                <h1 className='text-3xl mb-7 font-bold text-blue-900 text-center'>HÃY THAM GIA THỬ SỨC NẾU BẠN MONG MUỐN TRỞ THÀNH 1 BKTUTOR!!</h1>


                <div className="flex justify-center">
                    <button type="button" class="focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Làm bài kiểm tra dùng để xét duyệt gia sư ngay</button>
                </div>
            </div>
        </div>
    )
}

export default TutorSection