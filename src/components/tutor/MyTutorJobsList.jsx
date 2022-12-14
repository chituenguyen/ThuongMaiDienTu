import React from "react";
import { Collapse, Col, Row, Card, Modal, Button } from "antd";
import { useState } from "react";
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

const MyTutorJobsList = () => {
  const courseList = [
    {
      _id: "6384e7e8077ac78de81542a7",
      key: "6384e7e8077ac78de81542a7",
      subjects: ["Toán"],
      grade: "11",
      status: "COMPLETED",
      startdate: "2022-10-27",
      endate: "2022-12-10",
      numberOfStudent: 1,
      customer: "Nguyễn Thị A",
      salary: "12.000.000",
      parentcmt:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      __v: 0,
    },
    {
      _id: "6384e7e8077ac78de81542a7",
      key: "6384e7e8077ac78de81542a7",
      subjects: ["Ngoại ngữ"],
      grade: "12",
      status: "ONGOING",
      startdate: "2022-08-07",
      endate: "2022-10-01",
      numberOfStudent: 1,
      customer: "Nguyễn Thị B",
      salary: "12.000.000",
      parentcmt:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
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
      {courseList.map((course, index) => {
        return (
          <Card
            key={index}
            title={listToString(course.subjects)}
            extra={
              course.status === "ONGOING" ? (
                <span className="text-[#f29339] font-bold">
                  Đang trong quá trình dạy{"  "}
                  <ClockCircleFilled
                    style={{
                      verticalAlign: "middle",
                    }}
                  />
                </span>
              ) : (
                <span className="text-[green] font-bold">
                  Đã hoàn tất dạy{"  "}
                  <CheckCircleFilled
                    style={{
                      verticalAlign: "middle",
                    }}
                  />
                </span>
              )
            }
            className="my-4 hover:shadow-job-card"
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
                  <Col span={8}>Dạy cho phụ huynh:</Col>
                  <Col span={15}>{course.customer}</Col>
                </Row>
                <Row>
                  <Col span={8}>Tổng lương:</Col>
                  <Col span={15}>{course.salary} VND</Col>
                </Row>
              </Col>
              <Col span={12} flex="end">
                <Collapse onChange={onChange}>
                  <Panel header={"Xem nhận xét của phụ huynh"}>
                    <Row>
                      <Col span={30}>{course.parentcmt}</Col>
                    </Row>
                  </Panel>
                </Collapse>
                <button
                  type="button"
                  className="mt-3 focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => {}}
                >
                  Báo cáo sai phạm
                </button>
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

export default MyTutorJobsList;
