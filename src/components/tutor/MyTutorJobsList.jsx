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

  console.log(listCourse)
  const onChange = (key) => {
    console.log(key);
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
                  Đã hoàn tất dạy{"  "}
                  <CheckCircleFilled
                    style={{
                      verticalAlign: "middle",
                    }}
                  />
                </span>
              )
            }
            className="my-4 hover:shadow-job-card w-3/5 place-self-center"
          >
            <Row>
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
