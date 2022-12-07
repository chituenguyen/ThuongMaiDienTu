import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { AppContext } from "../context/role";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userInfoSelector } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [role, setRole] = useState("None");
  const userInfo = useSelector(userInfoSelector);
  useEffect(() => {
    {userInfo ? console.log("User role:", userInfo.role) : console.log("not login yet")}
    {userInfo ? setRole(userInfo.role) : console.log("not login yet => not set role")}
  }, []);


  let navigate = useNavigate();

  const handleLogout = () => {
    setRole("None");
    navigate("/");
  };

  let pathname = window.location.href;
  let address = pathname.split("/")[3];

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
            <Link
              to="/"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                address === ""
                  ? "bg-blue-200 text-bktutor-blue font-extrabold"
                  : ""
              }`}
            >
              Trang chủ
            </Link>
          </li>

          {role == "tutor" && (
            <li>
              <Link
                to="/become-tutor"
                className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                  address === "become-tutor"
                    ? "bg-blue-200 text-bktutor-blue font-extrabold"
                    : ""
                }`}
              >
                Trở thành gia sư
              </Link>
            </li>
          )}

          {role == "tutor" && (
            <li>
              <Link
                to="/find-jobs"
                className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                  address === "find-jobs"
                    ? "bg-blue-200 text-bktutor-blue font-extrabold"
                    : ""
                }`}
              >
                Tìm việc
              </Link>
            </li>
          )}

          {role == "parent" && (
            <li>
              <Link
                to="/find-tutor"
                className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                  address === "find-tutor"
                    ? "bg-blue-200 text-bktutor-blue font-extrabold"
                    : ""
                }`}
              >
                Tìm gia sư
              </Link>
            </li>
          )}

          {role == "parent" && (
            <li>
              <Link
                to="/parent-dashboard"
                className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                  address === "parent-class-list"
                    ? "bg-blue-200 text-bktutor-blue font-extrabold"
                    : ""
                }`}
              >
                Việc đã đăng
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/about"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                address === "about"
                  ? "bg-blue-200 text-bktutor-blue font-extrabold"
                  : ""
              }`}
            >
              Về chúng tôi
            </Link>
          </li>

          <li>
            <Link
              to="/qa"
              className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                address === "qa"
                  ? "bg-blue-200 text-bktutor-blue font-extrabold"
                  : ""
              }`}
            >
              Hỏi đáp
            </Link>
          </li>
        </ul>

        {role == "None" ? (
          <div className="flex ml-auto gap-5 items-center">
            <button className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300">
              Đăng ký
            </button>
            <Link to="/login">
              <button className="button-header bg-[#0E78C4]">Đăng nhập</button>
            </Link>
          </div>
        ) : (
          <div className="flex ml-auto gap-5 items-center">
            <button className="button-header bg-red-400" onClick={handleLogout}>
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
