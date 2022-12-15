import React from "react";
import { Modal, Button, Col, Row, Rate, Skeleton, Checkbox } from "antd";
import { useState, useEffect } from "react";
import ParentClass from "./ParentClass";
import { useSelector } from "react-redux";
import { roleIdSelector } from "../../redux/selectors";
import axios from "axios";
import { API_URL } from "../../constants/common";

const ParentClassList = () => {
  const roleID = useSelector(roleIdSelector);
  const [isLoading, setIsloading] = useState(true);
  const [isInfoOpen, setOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [currentTutorInfo, setcurrentTutorInfo] = useState();
  const [filter, setFilter] = useState(["OPEN", "ONGOING", "FINISH", "CANCEL"]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${API_URL}/course/get-list-course?id=${roleID}`
      );
      setCourseList(response?.data);
      setIsloading(false);
    })();
  }, [isLoading]);

  const onChange = (checkedValues) => {
    setFilter([checkedValues]);
  };

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
      <Checkbox.Group
        className="justify-self-end"
        style={{
          width: "100%",
        }}
        onChange={onChange}
        defaultValue={filter}
      >
        <Checkbox value="OPEN">Đang tìm</Checkbox>
        <Checkbox value="ONGOING">Đang dạy</Checkbox>
        <Checkbox value="FINISH">Hoàn thành</Checkbox>
        <Checkbox value="CANCEL">Đã hủy</Checkbox>
      </Checkbox.Group>
      {isLoading && <Skeleton active />}

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

        {currentTutorInfo?.gender && (
          <Row>
            <Col span={8}>Giới tính:</Col>
            <Col span={16}>
              <div>{currentTutorInfo?.gender === "male" ? "Nam" : "Nữ"}</div>
            </Col>
          </Row>
        )}

        {currentTutorInfo?.email && (
          <Row>
            <Col span={8}>Email:</Col>
            <Col span={16}>
              <div>{currentTutorInfo?.email}</div>
            </Col>
          </Row>
        )}

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
            <Rate disabled defaultValue={currentTutorInfo?.rate_star} />
          </Col>
        </Row>

        <div>{currentTutorInfo?.verified}</div>
      </Modal>

      <Modal
        title="Bạn có chắc chắn muốn xóa công việc này không?"
        open={isConfirmOpen}
        onOk={handleConfirmOk}
        onCancel={handleConfirmCancel}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        Xem kỹ thông tin của gia sư trước khi đồng ý nhận bạn nhé !
      </Modal>
    </div>
  );
};

export default ParentClassList;
