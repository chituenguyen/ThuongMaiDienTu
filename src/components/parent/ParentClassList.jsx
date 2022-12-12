import React from "react";
import { Modal } from "antd";
import { useState, useEffect } from "react";
import ParentClass from "./ParentClass";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector, userIdSelector } from "../../redux/selectors";
import axios from "axios";
import { API_URL } from "../../constants/common";

const ParentClassList = () => {
  const userId = useSelector(userIdSelector);
  // TODO: Get customer's ID

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${API_URL}/course/get-list-course?id=${'638f16240db95a581e3c11d9'}`
      );
      setCourseList(response?.data);
    })();
  }, []);

  const openInfoModal = () => {
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

  const openConfirmModal = () => {
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
          <ParentClass
            key={course._id}
            courseId={course._id}
            subjects={course.subjects.map((subject) => {
              return subject.name
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
          />
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
