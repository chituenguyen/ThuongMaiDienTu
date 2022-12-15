import React from "react";
import { Skeleton, Checkbox } from "antd";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { roleIdSelector } from "../../redux/selectors";
import axios from "axios";
import { API_URL } from "../../constants/common";
import Job from "../../components/tutor/Job";


const JobList = () => {
  const roleID = useSelector(roleIdSelector);
  const [isLoading, setIsloading] = useState(true);
  const [courseList, setCourseList] = useState([]);
  const [filter, setFilter] = useState(["OPEN", "ONGOING", "FINISH", "CANCEL"]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${API_URL}/course/get-open-course`);
      setCourseList(response?.data);
      setIsloading(false);
    })();
  }, [isLoading]);

  const onChange = (checkedValues) => {
    setFilter([checkedValues]);
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
          <Job
            key={course._id}
            courseId={course._id}
            subjects={course.subjects.map((subject) => {
              return subject.name;
            })}
            grade={course.grade.name}
            numberOfStudent={course.numberOfStudent}
            description={course.description}
            deadline={course.deadline}
            salary={course.salary}
            startDate={course.startDate}
            endDate={course.endDate}
            setIsloading={setIsloading}
          />
        );
      })}
    </div>
  );
};

export default JobList;
