import React from 'react'
import banner from "../../assets/banner.png"
import { useNavigate } from 'react-router-dom';
function ExamBanner() {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-2 gap-4 bg-[#0E78C4] mt-5 px-[68px] text-white py-10'>
        <div className='flex flex-col'>
            <h1 className='text-4xl mb-5 font-extrabold'>TRỞ THÀNH GIA SƯ CHỈ VỚI 5 BƯỚC</h1>
            <div className="">
              <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    01
                  </div>
                  <div className="text-xl font-bold">
                    Tạo tài khoản & cập nhật thông tin
                  </div>
                </div>

                <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    02
                  </div>
                  <div className="text-xl font-bold">
                    Đăng ký thi 
                  </div>
                </div>

                <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    03
                  </div>
                  <div className="text-xl font-bold">
                    Làm bài kiểm tra
                  </div>
                </div>

                <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    04
                  </div>
                  <div className="w-64 text-xl font-bold">
                    Xét duyệt
                  </div>
                </div>

                <div className="flex flex-row mb-5">
                  <div className="w-14 text-xl bg-red-100 text-red-800 text-2xl font-extrabold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    05
                  </div>
                  <div className="text-xl font-bold">
                    Nhận lớp
                  </div>
                </div>
                <button type="button" className="focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
                onClick={() => navigate('/exam-schedule')}
                >
                  XEM THÔNG TIN ĐĂNG KÝ DỰ THI
                </button>
            </div>
        </div>
        <div className='flex items-center'>
            <img src={banner} alt="" className='w-2/3 ml-auto'/>
        </div>
    </div>
  )
}

export default ExamBanner