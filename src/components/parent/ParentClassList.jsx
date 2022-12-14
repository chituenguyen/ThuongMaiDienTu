import React from "react";
import { Collapse, Col, Row, Card, Modal, Button } from "antd";
import { useState } from "react";
import "./ParentClassList.css";
import { ClockCircleFilled, CheckCircleFilled } from "@ant-design/icons";

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

const ParentClassList = () => {
  const courseList = [
    {
      _id: "6384e7e8077ac78de81542a7",
      subjects: ["6384cd6bc3218ac12f6bddea"],
      grade: "637deb268371d38e1eededab",
      description: "Phụ huynh cần gia sư Thành",
      status: "OPEN",
      deadline: "2022-11-27T17:00:00.000Z",
      salary: 2100000,
      numberOfStudent: 1,
      startDate: "2022-11-27T17:00:00.000Z",
      endDate: "2022-12-10T17:00:00.000Z",
      customer: "6390606b1ef18e04bfc7d73c",
      __v: 0,
    },
    {
      _id: "6384e8874813251fdaa808cc",
      subjects: ["637dec5e4b510c54b4b87be3", "6384da181308117b992e8763"],
      grade: "637deb268371d38e1eededab",
      description: "Phụ huynh cần gấp",
      status: "PENDING",
      deadline: "2022-11-27T17:00:00.000Z",
      salary: 3000000,
      numberOfStudent: 2,
      startDate: "2022-11-27T17:00:00.000Z",
      endDate: "2022-12-12T17:00:00.000Z",
      customer: "6384e4aa1b3e5b4dad6b0c61",
      __v: 0,
    },
    {
      _id: "638c9508525c980de45d42ae",
      subjects: ["6384cd6bc3218ac12f6bddea"],
      grade: "637deb268371d38e1eededab",
      description: "Phụ huynh cần gia sư nữ",
      status: "OPEN",
      deadline: "2022-11-27T17:00:00.000Z",
      salary: 2500000,
      numberOfStudent: 2,
      startDate: "2022-11-27T17:00:00.000Z",
      endDate: "2022-12-10T17:00:00.000Z",
      customer: "6384e4aa1b3e5b4dad6b0c5b",
      __v: 0,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  const info = () => {
    Modal.info({
      title: "Nguyễn Văn A",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
      okText: "Xong",
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    // set current id
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // set current id null
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    // set current id null
    setIsModalOpen(false);
  };

  return (
    <div>
      {courseList.map((course) => {
        return (
          <Card
            key={course._id}
            title={listToString(course.subjects)}
            extra={
              course.status === "PENDING" ? (
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
              {/* <BookFilled
                style={{
                  verticalAlign: "middle",
                }}
              />{" "} */}
              <Col span={12}>
                <Row>
                  <Col span={8}>Môn học:</Col>
                  <Col span={15}>{listToString(course.subjects)}</Col>
                </Row>
                <Row>
                  <Col span={8}>Lớp:</Col>
                  <Col span={15}>{course.grade}</Col>
                </Row>
                <Row>
                  <Col span={8}>Số lượng học sinh:</Col>
                  <Col span={15}>{course.numberOfStudent}</Col>
                </Row>
                <Row>
                  <Col span={8}>Mô tả:</Col>
                  <Col span={15}>{course.description}</Col>
                </Row>
                <Row>
                  <Col span={8}>Hạn đăng ký:</Col>
                  <Col span={15}>{dateConvert(course.deadline)}</Col>
                </Row>
                <Row>
                  <Col span={8}>Chi phí:</Col>
                  <Col span={15}>{course.salary} VND</Col>
                </Row>
                <Row>
                  <Col span={8}>Thời gian dạy:</Col>
                  <Col span={15}>
                    {" "}
                    <span>{dateConvert(course.startDate)}</span> -{" "}
                    <span>{dateConvert(course.endDate)}</span>
                  </Col>
                </Row>
              </Col>
              <Col span={12} flex="end">
                <Collapse onChange={onChange}>
                  <Panel header={"Danh sách ứng tuyển"}>
                    <Row>
                      <Col span={16}>Nguyễn Văn A</Col>
                      <Col span={8} className="text-right">
                        <Button onClick={info} className="mx-1">
                          Xem
                        </Button>
                        <Button onClick={showModal}>Nhận</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={16}>Nguyễn Văn A</Col>
                      <Col span={8} className="text-right">
                        <Button onClick={info} className="mx-1">
                          Xem
                        </Button>
                        <Button onClick={showModal}>Nhận</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={16}>Nguyễn Văn A</Col>
                      <Col span={8} className="text-right">
                        <Button onClick={info} className="mx-1">
                          Xem
                        </Button>
                        <Button onClick={showModal}>Nhận</Button>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Card>
        );
      })}

      <Modal
        title="Bạn có chắc chắn muốn nhận gia sư này?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        Xem kỹ thông tin của gia sư trước khi đồng ý nhận nhé !
      </Modal>
    </div>
  );
};

export default ParentClassList;
