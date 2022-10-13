import React from 'react'
import math from "../assets/math.png"
function Course() {
  return (
    <div className='px-[68px] py-5 bg-[#FBFBFB]'>
        <h1 className='text-center text-3xl mb-5'>ĐA DẠNG LỚP HỌC</h1>
        <div className='grid grid-cols-3 gap-10'>
            <div className='flex flex-col items-center'>
                <img src={math} alt="" className='h-[285px] w-[325px]'/>
                <p className='classroom'>LỚP TOÁN</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={math} alt="" className='h-[285px] w-[325px]'/>
                <p className='classroom'>LỚP VẬT LÝ</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={math} alt="" className='h-[285px] w-[325px]'/>
                <p className='classroom'>LỚP HÓA HỌC</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={math} alt="" className='h-[285px] w-[325px]'/>
                <p className='classroom'>LỚP SINH HỌC</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={math} alt="" className='h-[285px] w-[325px]'/>
                <p className='classroom'>LỚP NGOẠI NGỮ</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={math} alt="" className='h-[285px] w-[325px]'/>
                <p className='classroom'>LỚP ÔN THI THPT</p>
            </div>
        </div>
    </div>
  )
}

export default Course