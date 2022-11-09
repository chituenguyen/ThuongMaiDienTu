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
                <button className='input-banner bg-red-400'> <div className="text-xl font-extrabold">Xem lịch thi xét duyệt ngay~</div></button>
            </div>
        </div>
        <div className='flex items-center'>
            <img src={banner} alt="" className='w-2/3 ml-auto'/>
        </div>
    </div>
  )
}

export default ExamBanner