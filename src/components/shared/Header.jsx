import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/authSlice";
import Swal from "sweetalert2";
import { UserOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <Link to="/profile">Tthông tin cá nhân</Link>,
    key: "1",
  },
];

const logoutConfirmModal = (setRole, setClickLogout) => {
  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to sign out of the earth?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      setRole("None");
      setClickLogout(true);
    }
  });
};

function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userInfo = useSelector((state) =>
    state.userLogin.userInfo.length == 0 ? [] : state.userLogin.userInfo
  );
  const roleOfUser = useSelector((state) => state.userLogin.roleOfUser);
  const [role, setRole] = useState(roleOfUser);
  const [clickLogout, setClickLogout] = useState(false);
  useEffect(() => {
    if (clickLogout) {
      // logoutConfirmModal(setRole, setClickLogout);
      dispatch(logoutUser());
      navigate("/");
    }
    return () => {
      setClickLogout(false);
    };
  }, [clickLogout]);
  const handleLogin = () => {
    dispatch(logoutUser());
  };
  const handleLogout = () => {
    logoutConfirmModal(setRole, setClickLogout);
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
      <div className="flex px-[68px] items-center">
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

          {userInfo == undefined || userInfo.length == 0 ? (
            ""
          ) : userInfo.user.role == "tutor" ? (
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
          ) : (
            ""
          )}

          {userInfo == undefined || userInfo.length == 0 ? (
            ""
          ) : userInfo.user.role == "tutor" ? (
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
          ) : (
            ""
          )}

          {userInfo == undefined || userInfo.length == 0 ? (
            ""
          ) : userInfo.user.role == "customer" ? (
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
          ) : (
            ""
          )}

          {userInfo == undefined || userInfo.length == 0 ? (
            ""
          ) : userInfo.user.role == "customer" ? (
            <li>
              <Link
                to="/parent-dashboard"
                className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                  address === "parent-dashboard"
                    ? "bg-blue-200 text-bktutor-blue font-extrabold"
                    : ""
                }`}
              >
                Việc đã đăng
              </Link>
            </li>
          ) : (
            ""
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

          {userInfo == undefined || userInfo.length == 0 ? (
            ""
          ) : userInfo.user.role == "tutor" ? (
            <li>
              <Link
                to="/exam-schedule"
                className={`button-header hover:bg-[#DDECF7] transition ease-in-out duration-300 ${
                  address === "exam-schedule"
                    ? "bg-blue-200 text-bktutor-blue font-extrabold"
                    : ""
                }`}
              >
                Lịch dự thi
              </Link>
            </li>
          ) : (
            ""
          )}

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

        {userInfo.length == 0 || userInfo == undefined ? (
          <div className="flex ml-auto gap-5 items-center">
            <button
              onClick={() => handleLogin()}
              className="button-header hover:bg-[#DDECF7] transition ease-in-out duration-300"
            >
              Đăng ký
            </button>
            <Link to="/login">
              <button className="button-header bg-[#0E78C4] text-white">
                Đăng nhập
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex ml-auto gap-5 items-center">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ cursor: "pointer" }}>
                  <UserOutlined />
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <div>Xin chao {userInfo.user.fullname}</div>
            <button
              className="button-header bg-red-400"
              name="logout"
              onClick={handleLogout}
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
