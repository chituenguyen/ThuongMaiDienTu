import React from "react";
import { Modal, Button } from "antd";
import { useState, useEffect, useRef } from "react";
import ParentClass from "./ParentClass";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector, userIdSelector } from "../../redux/selectors";
import axios from "axios";
import { API_URL } from "../../constants/common";

const ParentClassList = () => {
  const userId = useSelector(userIdSelector);
  // TODO: Get customer's ID

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
        title={currentTutorInfo}
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
        <div>{currentTutorInfo}</div>
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
