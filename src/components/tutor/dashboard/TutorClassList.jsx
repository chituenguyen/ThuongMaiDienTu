import React from "react";
import { API_URL } from "../../../constants/common";
import axios from "axios";
import { Form, Input, Button, Select, Upload, Skeleton } from "antd";
import { useMemo, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { roleIdSelector } from "../../../redux/selectors";
import TutorClass from "./TutorClass";

const TutorClassList = () => {
  const roleID = useSelector(roleIdSelector);
  const [courseList, setCourseList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/tutor/${roleID}/applied-courses`)
      .then((response) => {
        console.log(response.data);
        setCourseList(response.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);

  return (
    <div>
      {isLoading && <Skeleton active />}

      {!isLoading &&
        courseList &&
        courseList.map((course) => {
          return (
            <TutorClass
              key={course?._id}
              courseId={course?._id}
              customer={course?.customer?.user}
              subjects={course?.subjects?.map((subject) => {
                return subject.name;
              })}
              grade={course?.grade?.name}
              numberOfStudent={course?.numberOfStudent}
              description={course?.description}
              deadline={course?.deadline}
              salary={course?.salary}
              startDate={course?.startDate}
              endDate={course?.endDate}
              setIsloading={setIsloading}
            />
          );
        })}
    </div>
  );
};

export default TutorClassList;
