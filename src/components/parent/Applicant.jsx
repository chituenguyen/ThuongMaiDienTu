import React from "react";
import {
  SearchOutlined,
  CheckOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Col, Row, Button, message, Popconfirm, Tooltip } from "antd";

import { useState } from "react";
const Applicant = ({
  id,
  verified,
  fullname,
  phone,
  gender,
  email,
  degree,
  facultity,
  school,
  description,
  student_id,
  rate_star,
  setcurrentTutorInfo,
  openInfoModal,
  acceptTutor,
  setSelectedTutor,
}) => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    const info = {
      id: id,
      verified: verified,
      fullname: fullname,
      phone: phone,
      gender: gender,
      email: email,
      degree: degree,
      facultity: facultity,
      school: school,
      description: description,
      student_id: student_id,
      rate_star: rate_star,
    };

    setcurrentTutorInfo(info);

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
      openInfoModal();
    }, 100);
  };

  const openAcceptBox = () => {
    setSelectedTutor(id);
  };

  return (
    <Row className="m-1">
      <Col span={12} className="align-middle h-full font-bold">
        {fullname}
        {verified && (
          <Tooltip title="Đã xác minh">
            <span>
              {" "}
              <CheckCircleOutlined
                style={{
                  verticalAlign: "middle",
                }}
                className="text-green"
              />
            </span>
          </Tooltip>
        )}
      </Col>
      <Col span={12} className="text-right">
        <Button
          className="mx-1 hover:bg-[#bfdbfe] hover:text-white"
          icon={
            <SearchOutlined
              style={{
                verticalAlign: "middle",
              }}
            />
          }
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Xem
        </Button>
        <Popconfirm
          title="Bạn có chắc chắn muốn nhận gia sư này không?"
          onConfirm={acceptTutor}
          okText="Đồng ý"
          cancelText="Không"
        >
          <Button
            className="hover:bg-[#bfdbfe]"
            onClick={openAcceptBox}
            icon={
              <CheckOutlined
                style={{
                  verticalAlign: "middle",
                }}
              />
            }
          >
            Nhận
          </Button>
        </Popconfirm>
      </Col>
    </Row>
  );
};

export default Applicant;
