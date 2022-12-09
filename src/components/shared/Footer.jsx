import React from 'react'
import abc from "../../assets/abc.png"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='px-[68px] bg-gradient-to-b from-[#0E78C4] to-white pb-10'>
        <div className='flex justify-center py-5 border-b-2'>
            <p className='text-2xl'>Nền tảng kết nối gia sư <br />và phụ huynh 4.0</p>
            <button className='ml-auto button-header bg-red-400'>Nhận thông báo mới nhất</button>
        </div>
        <div className='mt-3 flex gap-[100px]'>
            <div className=''>
                <p>Về BKTutor</p>
                <p>Ứng dụng giáo dục nền tảng công nghệ 4.0</p>
                <p>Mang đến trải nghiệm mới, giúp việc học trở nên dễ dàng hơn.</p>
                <img src={logo} alt="" />
            </div>
            <div className='mx-auto grid grid-cols-3 gap-10'>
                <div>
                    <p>Công ty</p>
                    <p>Về chúng tôi</p>
                    <p>Chính sách pháp lý</p>
                </div>
                <div>
                    <p>Liên hệ</p>
                    <p>Khu phố 6, đường Tạ Quang Bửu, phường Linh Trung, thành phố Thủ Đức</p>
                    <p>Hotline: 03365478965</p>
                    <p>Email: abc@gmail.com</p>
                </div>
                <div>
                    <p>Fanpage</p>
                    <img src={abc} alt="" className='w-[240px] h-[135px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer