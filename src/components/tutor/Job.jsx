import React from "react";
import {
  ClockCircleFilled,
  CheckCircleFilled,
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
  UsergroupAddOutlined
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
import {
  listToString,
  dateConvert,
  numberWithCommas,
} from "../../constants/common";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/common";
import { roleIdSelector } from "../../redux/selectors";
import {
  getInformationOfUser,
} from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Job = ({
  courseId,
  customer,
  subjects,
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
  useEffect(() => {
    (async () => {
      if (customer) {
        const dataOfUser = await dispatch(
          getInformationOfUser(customer)
        );
        setCustomerName(dataOfUser?.payload?.user?.fullname);
      }
    })();
  }, [dispatch]);

  const roleID = useSelector(roleIdSelector);
  const applyCourse = (e) => {
    axios
      .post(`${API_URL}/course/${courseId}/apply`, {
        tutorId: roleID,
      })
      .then((res) => {
        console.log(res);
        message.success(`Ứng tuyển thành công!`);
        setIsloading(true);
      });
  };

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
                icon={<UsergroupAddOutlined style={{ verticalAlign: "middle" }} />}
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
                  icon={
                    <UserOutlined style={{ verticalAlign: "middle" }} />
                  }
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

      <Row>
        <Col span={24} className="text-right">
          <Popconfirm
            title="Bạn có chắc chắn muốn ứng tuyển vào công việc này không?"
            onConfirm={applyCourse}
            okText="Đồng ý"
            cancelText="Không"
          >
            <Button
              className="mt-2 ml-1 bg-[#2286da] text-white font-bold"
              icon={<UpSquareFilled style={{ verticalAlign: "middle" }} />}
            >
              Ứng tuyển
            </Button>
          </Popconfirm>
        </Col>
      </Row>
    </Card>
  );
};

export default Job;
