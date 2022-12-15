import React from "react";
import { Skeleton, Select, InputNumber, Row } from "antd";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { roleIdSelector } from "../../redux/selectors";
import axios from "axios";
import { API_URL } from "../../constants/common";
import Job from "../../components/tutor/Job";
import { subjects } from "../../constants/common";

const JobList = () => {
  const roleID = useSelector(roleIdSelector);
  console.log(roleID);

  const [isLoading, setIsloading] = useState(true);
  const [courseList, setCourseList] = useState([]);
  const [filter, setFilter] = useState({
    tutorId: roleID,
  });

  useEffect(() => {
    (async () => {
      const response = await axios.post(`${API_URL}/course/get-open-course`, filter);
      setCourseList(response?.data.data);
      setIsloading(false);
    })();
  }, [isLoading, filter]);

  const handleSubjectChange = (value) => {
    setFilter({ ...filter, subject: value });
  };

  const handleMinSalaryChange = (value) => {
    setFilter({ ...filter, minSalary: value });    
    console.log(filter);
  };

  return (
    <div>
      <Row>
        <Select
          onChange={handleSubjectChange}
          allowClear
          style={{
            width: 150,
          }}
          placeholder="Chọn môn học"
        >
          {subjects.map((subject) => (
            <Select.Option key={subject.value} value={subject.value}>
              {subject.name}
            </Select.Option>
          ))}
        </Select>

        <InputNumber
          onChange={handleMinSalaryChange}
          placeholder="Lương tối thiểu"
          style={{
            width: 150,
            marginLeft: 3,
          }}
        />
      </Row>

      {isLoading && <Skeleton active />}
      {!isLoading &&
        courseList.map((course) => {
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
