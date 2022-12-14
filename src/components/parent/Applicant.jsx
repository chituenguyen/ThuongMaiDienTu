import React from "react";
import {
  SearchOutlined,
  CheckOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Col, Row, Button } from "antd";

import { useState } from "react";

const Applicant = ({
  id,
  verified,
  fullname,
  phone,
  degree,
  facultity,
  school,
  description,
  student_id,
  rate_star,
  setcurrentTutorInfo,
  openConfirmModal,
  openInfoModal,
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
    }, 400);
  };

  return (
    <Row className="m-1">
      <Col span={12} className="align-middle h-full font-bold">
        {fullname}
        {verified && (
          <span>
            {" "}
            <CheckCircleOutlined
              style={{
                verticalAlign: "middle",
              }}
              className="text-green"
            />
          </span>
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
        <Button
          className="hover:bg-[#bfdbfe]"
          onClick={openConfirmModal}
          // type="primary"
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
      </Col>
    </Row>
  );
};

export default Applicant;
