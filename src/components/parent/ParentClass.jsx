import React from "react";
import { ClockCircleFilled, CheckCircleFilled } from "@ant-design/icons";
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
      console.log("fetch data");
    }
  };

  return (
    <Card
      title={listToString(subjects) + " (" + grade + ")"}
      extra={
        status === "PENDING" ? (
          <span className="text-[#f29339] font-bold">
            Đang chờ{"  "}
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
          <Row>
            <Col span={8}>Môn học:</Col>
            <Col span={15}>{listToString(subjects)}</Col>
          </Row>
          <Row>
            <Col span={8}>Lớp:</Col>
            <Col span={15}>{grade}</Col>
          </Row>
          <Row>
            <Col span={8}>Số lượng học sinh:</Col>
            <Col span={15}>{numberOfStudent}</Col>
          </Row>
          <Row>
            <Col span={8}>Mô tả:</Col>
            <Col span={15}>{description}</Col>
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
        </Col>
        <Col span={12} flex="end">
          <Collapse onChange={onChange}>
            <Panel header={"Danh sách ứng tuyển"}>
              {applicantList.length === 0
                ? "Chưa có ứng viên nào."
                : applicantList.map((applicant) => {
                    return (
                      <Row>
                        <Col span={16}>Nguyễn Văn A</Col>
                        <Col span={8} className="text-right">
                          <Button onClick={openInfoModal} className="mx-1">
                            Xem
                          </Button>
                          <Button onClick={openConfirmModal}>Nhận</Button>
                        </Col>
                      </Row>
                    );
                  })}
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </Card>
  );
};

export default ParentClass;
