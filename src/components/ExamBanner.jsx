import React from 'react'
import banner from "../assets/banner.png"

function ExamBanner() {
  return (
    <div className='grid grid-cols-2 gap-4 bg-[#0E78C4] mt-5 px-[68px] text-white py-10'>
        <div className='flex flex-col'>
            <h1 className='text-4xl mb-5'>TRỞ THÀNH GIA SƯ CHỈ VỚI 5 BƯỚC</h1>
            <div className="">
              <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    01
                  </div>
                  <div className="text-xl font-bold">
                    Tạo tài khoản
                  </div>
                </div>

                <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    02
                  </div>
                  <div className="text-xl font-bold">
                    Cập nhật thông tin
                  </div>
                </div>

                <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    03
                  </div>
                  <div className="text-xl font-extrabold">
                    Làm bài kiểm tra
                  </div>
                </div>

                <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    04
                  </div>
                  <div className="w-64 text-xl font-extrabold">
                    Xét duyệt
                  </div>
                </div>

                <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    05
                  </div>
                  <div className="text-xl font-extrabold">
                    Nhận lớp
                  </div>
                </div>
                <button type="button" class="focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Xem lịch kiểm tra dùng để xét duyệt gia sư ngay~</button>
            </div>
        </div>
        <div className='flex items-center'>
            <img src={banner} alt="" className='w-2/3 ml-auto'/>
        </div>
    </div>
  )
}

export default ExamBanner