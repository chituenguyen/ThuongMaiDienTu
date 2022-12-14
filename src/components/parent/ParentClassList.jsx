import React from "react";
import { Modal, Button, Col, Row, Spin } from "antd";
import { useState, useEffect } from "react";
import ParentClass from "./ParentClass";
import { useSelector } from "react-redux";
import { roleIdSelector } from "../../redux/selectors";
import axios from "axios";
import { API_URL } from "../../constants/common";
import { LinearProgress } from "@material-ui/core";

const ParentClassList = () => {
  const userId = useSelector(roleIdSelector);
  console.log(userId)

  const [isLoading, setIsloading] = useState(true);
  const [isInfoOpen, setOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [currentTutorInfo, setcurrentTutorInfo] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${API_URL}/course/get-list-course?id=${"638f16240db95a581e3c11d9"}`
      );
      setCourseList(response?.data);
      setIsloading(false)
    })();
  }, []);

  const openInfoModal = () => {
    setOpen(true);
  };
  const handleInfoOk = () => {
    setOpen(false);
  };
  const handleInfoCancel = () => {
    setOpen(false);
  };

  const openConfirmModal = () => {
    // set current id
    setIsConfirmOpen(true);
  };
  const handleConfirmOk = () => {
    // set current id null
    setIsConfirmOpen(false);
  };
  const handleConfirmCancel = () => {
    // set current id null
    setIsConfirmOpen(false);
  };

  return (
    <div>
      {isLoading && <LinearProgress/>}

      {courseList.map((course) => {
        return (
          <ParentClass
            key={course._id}
            courseId={course._id}
            subjects={course.subjects.map((subject) => {
              return subject.name;
            })}
            status={course.status}
            grade={course.grade.name}
            numberOfStudent={course.numberOfStudent}
            description={course.description}
            deadline={course.deadline}
            salary={course.salary}
            startDate={course.startDate}
            endDate={course.endDate}
            openInfoModal={openInfoModal}
            openConfirmModal={openConfirmModal}
            setcurrentTutorInfo={setcurrentTutorInfo}
          />
        );
      })}

      <Modal
        open={isInfoOpen}
        title={currentTutorInfo?.fullname}
        onOk={handleInfoOk}
        onCancel={handleInfoCancel}
        footer={[
          <Button key="back" onClick={handleInfoCancel}>
            Xong
          </Button>,
          <Button key="submit" type="primary" onClick={handleInfoOk}>
            Nhận
          </Button>,
        ]}
      >
        <Row>
          <Col span={8}>Số điện thoại:</Col>
          <Col span={16}>
            <div>{currentTutorInfo?.phone}</div>
          </Col>
        </Row>

        {currentTutorInfo?.degree && (
          <Row>
            <Col span={8}>Trình độ:</Col>
            <Col span={16}>
              <div>{currentTutorInfo?.degree}</div>
            </Col>
          </Row>
        )}

        <Row>
          <Col span={8}>Trường:</Col>
          <Col span={16}>
            <div>{currentTutorInfo?.school}</div>
          </Col>
        </Row>

        <Row>
          <Col span={8}>Khoa:</Col>
          <Col span={16}>
            <div>{currentTutorInfo?.facultity}</div>
          </Col>
        </Row>

        <Row>
          <Col span={8}>Giới thiệu:</Col>
          <Col span={16}>
            <div>{currentTutorInfo?.description}</div>
          </Col>
        </Row>

        <Row>
          <Col span={8}>MSSV:</Col>
          <Col span={16}>
            <div>{currentTutorInfo?.student_id}</div>
          </Col>
        </Row>

        <Row>
          <Col span={8}>Đánh giá:</Col>
          <Col span={16}>
            <div>{currentTutorInfo?.rate_star}</div>
          </Col>
        </Row>

        <div>{currentTutorInfo?.verified}</div>
      </Modal>

      <Modal
        title="Bạn có chắc chắn muốn nhận gia sư này?"
        open={isConfirmOpen}
        onOk={handleConfirmOk}
        onCancel={handleConfirmCancel}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        Xem kỹ thông tin của gia sư trước khi đồng ý nhận nhé !
      </Modal>
    </div>
  );
};

export default ParentClassList;
