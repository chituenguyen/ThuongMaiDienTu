import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div>
      <div>
        <img src={logo} alt="" className="h-[71px] w-[241px] mx-[83px] mb-[12px]" />
      </div>
      <div className="flex px-[68px]">
        <ul className="flex gap-[20px]">
          <button className="button-header bg-[#0E78C4]">
            <li>Trang chủ</li>
          </button>
          <button className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
            <li>Tìm gia sư</li>
          </button>
          <button className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
            <li>Trở thành gia sư</li>
          </button>
          <button className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
            <li>Về chúng tôi</li>
          </button>
          <button className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
            <li>Hỏi đáp</li>
          </button>
        </ul>

        <div className="flex ml-auto gap-5">
          <button className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">Đăng ký</button>
          <button className="button-header bg-[#0E78C4]">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
