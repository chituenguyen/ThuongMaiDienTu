import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {getMomo} from '../../redux/authSlice'


const ParentProfile = ({ userInfo }) => {
  const token = userInfo.accessToken
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [money, setMoney] = useState(0);
  const link = userInfo.user.link

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    dispatch(getMomo({"money":money,"token":token})).then(res =>{
      console.log(res.payload.qrCodeUrl);
      window.open(res.payload.qrCodeUrl, '_blank', 'noopener,noreferrer');
    })

    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 3000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <div>
      <div className="tutor-welcome-section">
        <div className="object-section text-blue-900 border-2 shadow-md rounded-md ml-20 mr-20 mt-3 mb-3 bg-gray-200">
          <div className="flex text-center justify-items-center justify-center font-bold text-2xl">
            <p>Profile xịn xò của tôi</p>
          </div>

          <hr className="hover:shadow-job-card m-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="m-10">
            <div className="flex text-center justify-items-center justify-center">
              <img
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                alt=""
                className="w-[220px] h-[220px]max-w-160pxs hover:shadow-job-card rounded-md"
              />
            </div>
            <div className="">
              <div>
                <Form layout="vertical" disabled={false}>
                  <Form.Item label="Họ và tên">
                    <Input value={userInfo.user.fullname} />
                  </Form.Item>
                  <Form.Item label="Giới tính">
                    <Select value={userInfo.user.gender} disabled>
                      <Select.Option value="male">Nam</Select.Option>
                      <Select.Option value="female">Nữ</Select.Option>
                      <Select.Option value="other">Khác</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Số điện thoại">
                    <Input value={userInfo.user.phone_number} />
                  </Form.Item>

                  <Form.Item label="Tài khoản Momo nhận tiền (hãy liên lạc với trung tâm BKTutor trong trường hợp bạn muốn thay đổi SDT Momo)">
                    <Input value={userInfo.user.phone_number} disabled />
                  </Form.Item>

                  <Form.Item label="Chức vụ">
                    <Input
                      value={userInfo.user.role == "tutor" ? "Gia sư" : ""}
                      disabled
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        Số dư{" "}
                        <PlusCircleOutlined
                          style={{ cursor: "pointer" }}
                          onClick={showModal}
                        />
                      </div>
                    }
                  >
                    <Input value={userInfo.user.balance} disabled />
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Nạp tiền vào tài khoản"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form.Item label="Số tiền">
          <Input
            value={money}
            onChange={(e)=>setMoney(e.target.value)}
          />
        </Form.Item>
      </Modal>
    </div>
  );
};

export default ParentProfile;
