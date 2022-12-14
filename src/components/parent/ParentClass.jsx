import React from "react";
import {
  ClockCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  DollarCircleFilled,
  CalendarOutlined,
  UserOutlined,
  BookOutlined,
  NumberOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Collapse, Col, Row, Card, Button, Tag, Badge } from "antd";
import {
  listToString,
  dateConvert,
  numberWithCommas,
} from "../../constants/common";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/common";
import Applicant from "./Applicant";

const { Panel } = Collapse;

const ParentClass = ({
  courseId,
  subjects,
  status,
  grade,
  numberOfStudent,
  description,
  deadline,
  salary,
  startDate,
  endDate,
  openInfoModal,
  openConfirmModal,
  setcurrentTutorInfo,
}) => {
  const [applicantList, setApplicantList] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${API_URL}/course/${courseId}/applied-tutors`
      );
      console.log(response?.data);
      setApplicantList(response?.data);
    })();
  }, []);

  const onChange = (key) => {
    if (key.length != 0) {
      // console.log("fetch data");
    }
  };

  return (
    <Card
      title={listToString(subjects) + " (" + grade + ")"}
      extra={
        status === "PENDING" ? (
          <span className="text-[#f29339] font-bold">
            Đang dạy{"  "}
            <ClockCircleFilled
              style={{
                verticalAlign: "middle",
              }}
            />
          </span>
        ) : (
          <span className="text-[green] font-bold">
            Đang mở{"  "}
            <CheckCircleFilled
              style={{
                verticalAlign: "middle",
              }}
            />
          </span>
        )
      }
      className="my-4"
    >
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
                icon={<UserOutlined style={{ verticalAlign: "middle" }} />}
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
          {status !== "PENDING" && (
            <Row className="mb-1.5">
              <Col span={8}>Hạn đăng ký:</Col>
              <Col span={15}>
                <Tag
                  icon={
                    <CalendarOutlined style={{ verticalAlign: "middle" }} />
                  }
                  color="warning"
                  className="font-bold"
                >
                  {dateConvert(deadline)}
                </Tag>
              </Col>
            </Row>
          )}
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
            {/* <span className="px-1 py-0.5">VND</span> */}
          </Row>

          <Row className="mb-1.5">
            <Col span={8}>Mô tả:</Col>
            <Col span={15}>{description}</Col>
          </Row>
        </Col>
        <Col span={12} flex="end">
          {status === "OPEN" && (
            <Collapse onChange={onChange}>
              <Panel header={"Danh sách ứng tuyển"}>
                {applicantList.length === 0
                  ? "Chưa có ứng viên nào."
                  : applicantList.map((applicant) => (
                      <Applicant
                        key={applicant?._id}
                        id={applicant?.tutor?._id}
                        verified={applicant?.tutor?.verified}
                        fullname={applicant?.tutor?.user?.fullname}
                        phone={applicant?.tutor?.user?.phone_number}
                        degree={applicant?.tutor?.degree}
                        facultity={applicant?.tutor?.facultity}
                        school={applicant?.tutor?.school}
                        description={applicant?.tutor?.description}
                        student_id={applicant?.tutor?.student_id}
                        rate_star={applicant?.tutor?.rate_star}
                        setcurrentTutorInfo={setcurrentTutorInfo}
                        openConfirmModal={openConfirmModal}
                        openInfoModal={openInfoModal}
                      />
                    ))}
              </Panel>
            </Collapse>
          )}

          {status === "PENDING" && (
            <div>
              <div>Gia sư đang nhận</div>
            </div>
          )}
        </Col>
      </Row>

      <Row>
        <Col span={24} className="text-right">
          {status === "PENDING" && (
            <Button
              className="mt-2 ml-1 bg-[#a8e890] font-bold"
              icon={<DollarCircleFilled style={{ verticalAlign: "middle" }} />}
            >
              Thanh toán
            </Button>
          )}

          {status === "FINISH" && (
            <Button
              className="mt-2 bg-red-400 font-bold"
              icon={<DollarCircleFilled style={{ verticalAlign: "middle" }} />}
            >
              Xem đánh giá
            </Button>
          )}

          {status !== "FINISH" && (
            <Button
              className="mt-2 ml-1 bg-red-400 text-white font-bold"
              icon={<CloseCircleFilled style={{ verticalAlign: "middle" }} />}
            >
              Huỷ lớp
            </Button>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default ParentClass;
