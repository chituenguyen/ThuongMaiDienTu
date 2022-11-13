import React from 'react'

const TutorHeader = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="" className="h-[71px] w-[241px] mx-[83px] mb-[12px]" />
      </div>
      <div className="flex px-[68px] items-center ">
        <ul className="flex gap-[20px] ">
          <li >
            <a href="/"className=" button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
              Trang chủ
            </a>
          </li>
          <li >
            <a href="/find-tutor"className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
              Khám phá
            </a>
          </li>
          <li >
            <a href="/become-tutor"className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
              Trở thành gia sư
            </a>
          </li>
          <li >
            <a href="/about"className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
              Về chúng tôi
            </a>
          </li>
          <li >
            <a href="/qa"className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
              Hỏi đáp
            </a>
          </li>
        </ul>

        <div className="flex ml-auto gap-5">
            <span>Xin chào, ABCD!</span>
        </div>
      </div>
    </div>  )
}

export default TutorHeader