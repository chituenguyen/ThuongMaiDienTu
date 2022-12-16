import React from "react";
import {
  UpSquareFilled,
  StopFilled,
  SearchOutlined,
  DollarCircleFilled,
  CalendarOutlined,
  UserOutlined,
  BookOutlined,
  NumberOutlined,
  DollarCircleOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import {
  Collapse,
  Col,
  Row,
  Card,
  Button,
  Tag,
  message,
  Popconfirm,
  Skeleton,
  Rate,
} from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  API_URL,
  listToString,
  dateConvert,
  numberWithCommas,
} from "../../../constants/common";
import { roleIdSelector } from "../../../redux/selectors";
import {
  getInformationOfUser,
} from "../../../redux/authSlice";

const TutorClass = ({
  courseId,
  customer,
  subjects = [],
  grade,
  numberOfStudent,
  description,
  deadline,
  salary,
  startDate,
  endDate,
  setIsloading,
}) => {
  const dispatch = useDispatch();
  const [customerName, setCustomerName] = useState();
  
//   useEffect(() => {
//     (async () => {
//       if (customer) {
//         const dataOfUser = await dispatch(getInformationOfUser(customer));
//         setCustomerName(dataOfUser?.payload?.user?.fullname);
//       }
//     })();
//   }, []);

  return (
    <Card title={listToString(subjects) + " (" + grade + ")"} className="my-4">
      <Row>
        <Col span={12}>
          <Row className="mb-1.5">
            <Col span={8}>Môn học:</Col>
            <Col span={15}>
              {subjects.map((subject) => (
                <Tag
                  key={subject}
                  icon={<BookOutlined style={{ verticalAlign: "middle" }} />}
                  color="processing"
                  className="font-bold"
                >
                  {subject}
                </Tag>
              ))}
            </Col>
          </Row>
          <Row className="mb-1.5">
            <Col span={8}>Lớp:</Col>
            <Col span={15}>
              <Tag
                icon={<NumberOutlined style={{ verticalAlign: "middle" }} />}
                color="processing"
                className="font-bold"
              >
                {grade}
              </Tag>
            </Col>
          </Row>
          <Row className="mb-1.5">
            <Col span={8}>Số lượng học sinh:</Col>
            <Col span={15}>
              <Tag
                icon={
                  <UsergroupAddOutlined style={{ verticalAlign: "middle" }} />
                }
                color="processing"
                className="font-bold"
              >
                {numberOfStudent}
              </Tag>
            </Col>
          </Row>
          <Row className="mb-1.5">
            <Col span={8}>Thời gian dạy:</Col>
            <Col span={15}>
              <Tag
                icon={<CalendarOutlined style={{ verticalAlign: "middle" }} />}
                color="processing"
                className="font-bold"
              >
                {dateConvert(startDate)}
              </Tag>
              -{"  "}
              <Tag
                icon={<CalendarOutlined style={{ verticalAlign: "middle" }} />}
                color="processing"
                className="font-bold"
              >
                {dateConvert(endDate)}
              </Tag>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          {customer && (
            <Row className="mb-1.5">
              <Col span={8}>Phụ huynh:</Col>
              <Col span={15}>
                <Tag
                  icon={<UserOutlined style={{ verticalAlign: "middle" }} />}
                  color="error"
                  className="font-bold"
                >
                  {customerName}
                </Tag>
              </Col>
            </Row>
          )}

          <Row className="mb-1.5">
            <Col span={8}>Hạn đăng ký:</Col>
            <Col span={15}>
              <Tag
                icon={<CalendarOutlined style={{ verticalAlign: "middle" }} />}
                color="warning"
                className="font-bold"
              >
                {dateConvert(deadline)}
              </Tag>
            </Col>
          </Row>
          <Row className="mb-1.5">
            <Col span={8}>Chi phí:</Col>
            <Tag
              color="success"
              className="font-bold"
              icon={
                <DollarCircleOutlined style={{ verticalAlign: "middle" }} />
              }
            >
              {numberWithCommas(salary)} VND
            </Tag>
          </Row>

          <Row className="mb-1.5">
            <Col span={8}>Mô tả:</Col>
            <Col span={15}>{description}</Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default TutorClass;
