import React, { useMemo } from "react";
import {
  Collapse,
  Col,
  Row,
  Card,
  Modal,
  Button,
  Radio,
  Space,
  Input,
} from "antd";
import { useState } from "react";
import { ClockCircleFilled, CheckCircleFilled } from "@ant-design/icons";

const { Panel } = Collapse;
const StatusOfCourse = {
  ONGOING: "Ongoing",
  FINISH: "Finish",
  PENDING: "Pending",
  REJECTED: "Rejected",
  ACCEPT: "Accept",
};
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

const MyTutorJobsList = ({ listCourse }) => {
  const courseList = useMemo(() => {
    const listCourseFinish = listCourse;
    const listCourseOngoing = listCourse;
    return [
      ...listCourseOngoing.filter(
        (course) => course.status === StatusOfCourse.ONGOING
      ),
      ...listCourseFinish.filter(
        (course) => course.status === StatusOfCourse.FINISH
      ),
    ];
  }, [listCourse]);
  // const courseList = [
  //   {
  //     _id: "6384e7e8077ac78de81542a7",
  //     key: "6384e7e8077ac78de81542a7",
  //     subjects: ["Toán"],
  //     grade: "11",
  //     status: "COMPLETED",
  //     startdate: "2022-10-27",
  //     endate: "2022-12-10",
  //     numberOfStudent: 1,
  //     customer: "Nguyễn Thị A",
  //     salary: "12.000.000",
  //     parentcmt:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6384e7e8077ac78de81542a7",
  //     key: "6384e7e8077ac78de81542a7",
  //     subjects: ["Ngoại ngữ"],
  //     grade: "12",
  //     status: "ONGOING",
  //     startdate: "2022-08-07",
  //     endate: "2022-10-01",
  //     numberOfStudent: 1,
  //     customer: "Nguyễn Thị B",
  //     salary: "12.000.000",
  //     parentcmt:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  //     __v: 0,
  //   },
  // ];

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

  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      {courseList.map((course, index) => {
        return (
          <Card
            key={index}
            title={listToString(course.subjects)}
            extra={
              course.status === StatusOfCourse.ONGOING ? (
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
                  Đã hoàn tất dạy
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
                  className="mt-3 focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg px-2 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
                  onClick={() => setModal2Open(true)}
                >
                  Báo cáo sai phạm
                </button>
                <Modal
                  title="Bạn muốn báo cáo sai phạm? Xin mời chọn nội dung sai phạm!"
                  centered
                  open={modal2Open}
                  onOk={() => setModal2Open(false)}
                  onCancel={() => setModal2Open(false)}
                  width={800}
                  okText="Gửi báo cáo"
                  cancelText="Hủy bỏ"
                >
                  <p className="font-bold text-red-700 text-xl mb-3">
                    Báo cáo sai phạm liên quan đến phụ huynh {course.customer}
                    !!!
                  </p>
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value={1}>Phụ huynh này có dấu hiệu lừa đảo</Radio>
                      <Radio value={2}>
                        Phụ huynh có thái độ không tốt, gây ảnh hưởng lớn đến
                        tôi trong quá trình tôi giảng dạy
                      </Radio>
                      <Radio value={3}>
                        Phụ huynh / Học sinh có hành động gây ảnh hưởng đến sức
                        khỏe thể chất / tinh thần của tôi
                      </Radio>
                      <Input placeholder="Ý kiến khác" />
                    </Space>
                  </Radio.Group>
                </Modal>
              </Col>
            </Row>
          </Card>
        );
      })}
    </div>
  );
};

export default MyTutorJobsList;
