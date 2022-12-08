import React from "react";
import { Collapse, Col, Row, Card, Modal, Button } from "antd";

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
  ];

  const onChange = (key) => {
    console.log(key);
  };

  const info = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div>
      {courseList.map((course) => {
        return (
          <Card
            title={listToString(course.subjects)}
            extra={course.status}
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
                        <Button onClick={info}>Info</Button>
                        <Button onClick={info}>Approve</Button>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Card>
        );
      })}
    </div>
  );
};

export default ParentClassList;
