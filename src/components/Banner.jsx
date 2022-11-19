import React from "react";
import banner from "../assets/banner.png";

function Banner() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-[#0E78C4] mt-5 px-[68px] text-white py-10">
      <div className="flex flex-col">
        <h1 className="text-6xl mb-3">Trở thành gia sư trong 1 nốt nhạc</h1>
        <input
          type="text"
          placeholder="Chọn một user thật ngầu..."
          className="input-banner"
        />
        <input
          type="text"
          placeholder="Đặt một mật khẩu..."
          className="input-banner"
        />
        <input
          type="email"
          placeholder="Nhập email của bạn..."
          className="input-banner"
        />
        <button className="input-banner bg-red-400"> Đăng ký</button>
        <p className="w-[400px]">
          Bằng cách nhấn vào Đăng ký, bạn đồng ý với{" "}
          <span>
            Điều khoản, Chính sách quyền riêng tư và Chính sách cookie
          </span>{" "}
          của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và
          hủy nhận bất cứ lúc nào
        </p>
      </div>
      <div className="flex items-center">
        <img src={banner} alt="" className="w-2/3 ml-auto" />
      </div>
    </div>
  );
}

export default Banner;
