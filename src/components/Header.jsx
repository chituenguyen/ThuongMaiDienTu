import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { AppContext } from "../context/role";

function Header() {
  const { role, setRole } = useContext(AppContext);
  const changeRole = (e) =>{
    setRole(e.target.value)
  }
  let pathname = window.location.href
  let address =  pathname.split("/")[3]
  console.log(address)
  return (
    <div>
      <div>
        <img
          src={logo}
          alt=""
          className="h-[71px] w-[241px] mx-[83px] mb-[12px]"
        />
      </div>
      <div className="flex px-[68px] items-center ">
        <ul className="flex gap-[20px] ">
          <li>
            <a
              href="/"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${address ==='' ? "bg-[#DDECF7]":""}`}
            >
              Trang chủ
            </a>
          </li>
          <li>
            <a
              href="/find-tutor"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${address ==='find-tutor' ? "bg-[#DDECF7]":""}`}
            >
              Tìm gia sư
            </a>
          </li>
          <li>
            <a
              href="/become-tutor"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${address ==='become-tutor' ? "bg-[#DDECF7]":""}`}
            >
              Trở thành gia sư
            </a>
          </li>

          <li>
            <a
              href="/find-jobs"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${address ==='find-jobs' ? "bg-[#DDECF7]":""}`}
            >
              Tìm việc
            </a>
          </li>

          <li>
            <a
              href="/about"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${address ==='about' ? "bg-[#DDECF7]":""}`}
            >
              Về chúng tôi
            </a>
          </li>
          <li>
            <a
              href="/qa"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${address ==='qa' ? "bg-[#DDECF7]":""}`}
            >
              Hỏi đáp
            </a>
          </li>
        </ul>

        <div className="flex ml-auto gap-5 items-center">
          {/* <input
            type="radio"
            id="admin"
            name="fav_language"
            value="Admin"
            onChange={(e) => changeRole(e)}
          />
          <label htmlFor="admin">Admin</label>
          <input
            type="radio"
            id="user"
            name="fav_language"
            value="User"
            onChange={(e) => changeRole(e)}
          />
          <label htmlFor="user">User</label> */}

          <button className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
            Đăng ký
          </button>
          <button className="button-header bg-[#0E78C4]">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
