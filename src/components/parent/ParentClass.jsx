import React from "react";
import {
  ClockCircleFilled,
  CheckCircleFilled,
  SearchOutlined,
  CheckOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Collapse, Col, Row, Card, Button } from "antd";
import { listToString, dateConvert } from "../../constants/common";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/common";

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
      console.log(listToString(subjects));
      setApplicantList(response?.data);
    })();
  }, []);

  const onChange = (key) => {
    if (key.length != 0) {
      console.log("fetch data");
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
                <span className="border px-1 py-0.5 rounded mr-1 font-bold bg-[#bfdbfe]">{subject}</span>
              ))}
            </Col>
          </Row>
          <Row className="mb-1.5">
            <Col span={8}>Lớp:</Col>
            <Col span={15}>
              <span className="border p-1 rounded mr-1 font-bold bg-[#a8e890]">{grade}</span>
            </Col>
          </Row>
          <Row>
            <Col span={8}>Số lượng học sinh:</Col>
            <Col span={15}>{numberOfStudent}</Col>
          </Row>
          <Row>
            <Col span={8}>Hạn đăng ký:</Col>
            <Col span={15}>{dateConvert(deadline)}</Col>
          </Row>
          <Row>
            <Col span={8}>Chi phí:</Col>
            <Col span={15}>{salary} VND</Col>
          </Row>
          <Row>
            <Col span={8}>Thời gian dạy:</Col>
            <Col span={15}>
              {" "}
              <span>{dateConvert(startDate)}</span> -{" "}
              <span>{dateConvert(endDate)}</span>
            </Col>
          </Row>
          <Row>
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
                        id={applicant?.tutor._id}
                        verified={applicant?.tutor.verified}
                        degree={applicant?.tutor.degree}
                        facultity={applicant?.tutor.facultity}
                        school={applicant?.tutor.school}
                        description={applicant?.tutor.description}
                        student_id={applicant?.tutor.student_id}
                        rate_star={applicant?.tutor.rate_star}
                        setcurrentTutorInfo={setcurrentTutorInfo}
                        openConfirmModal={openConfirmModal}
                        openInfoModal={openInfoModal}
                      />
                    ))}
              </Panel>
            </Collapse>
          )}
        </Col>
      </Row>
    </Card>
  );
};

const Applicant = ({
  id,
  verified,
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

    setcurrentTutorInfo(id);

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
        {id}
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

export default ParentClass;
