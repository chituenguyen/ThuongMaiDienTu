import React from "react";
import { ClockCircleFilled, CheckCircleFilled } from "@ant-design/icons";
import { Collapse, Col, Row, Card, Button } from "antd";

const { Panel } = Collapse;

const listToString = (list) => {
  return list.map((item, idx) => {
    if (idx == 0) {
      return item;
    }
    return ", " + item;
  });
};

const dateConvert = (dateString) => {
  return dateString.substr(0, 10);
};

const onChange = (key) => {
  console.log(key);
};

const ParentClass = ({
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
              <Row>
                <Col span={16}>Nguyễn Văn A</Col>
                <Col span={8} className="text-right">
                  <Button onClick={openInfoModal} className="mx-1">
                    Xem
                  </Button>
                  <Button onClick={openConfirmModal}>Nhận</Button>
                </Col>
              </Row>
              <Row>
                <Col span={16}>Nguyễn Văn A</Col>
                <Col span={8} className="text-right">
                  <Button onClick={openInfoModal} className="mx-1">
                    Xem
                  </Button>
                  <Button onClick={openConfirmModal}>Nhận</Button>
                </Col>
              </Row>
              <Row>
                <Col span={16}>Nguyễn Văn A</Col>
                <Col span={8} className="text-right">
                  <Button onClick={openInfoModal} className="mx-1">
                    Xem
                  </Button>
                  <Button onClick={openConfirmModal}>Nhận</Button>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </Card>
  );
};

export default ParentClass;
