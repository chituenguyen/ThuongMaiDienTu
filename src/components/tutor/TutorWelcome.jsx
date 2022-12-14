import { Form, Input, Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useMemo, useState, useEffect } from "react";
import MyTutorJobsList from "./MyTutorJobsList";
import TutorSalary from "./TutorSalary";

import {
  getAllCourseOfTutor,
  getInformationOfGrade,
  getInformationOfSubject,
  getInformationOfCustomer,
  getInformationOfUser,
} from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

function TutorWelcomeSection() {
  const dispatch = useDispatch();
  const [gender, setGender] = useState();
  const [listCourse, setListCourse] = useState([]);
  const { tutor } = useSelector((state) => state.userLogin);
  useEffect(() => {
    const getListCourseOfTutor = async () => {
      const responseOfCourse = await dispatch(getAllCourseOfTutor(tutor._id));
      const listCourseAPI = responseOfCourse.payload;
      let result = [];
      listCourseAPI.forEach(async (response, idx) => {
        if (response.course) {
          let objOfResult = {
            _id: response._id,
            key: response._id,
            status: response.status,
            startDate: response.course.startDate,
            endDate: response.course.endDate,
            salary: response.course.salary,
            numberOfStudent: response.course.numberOfStudent,
            parentcmt: response.course.description,
          };
          const dataOfCustomer = await dispatch(
            getInformationOfCustomer(response.course.customer)
          );
          const dataOfGrade = await dispatch(
            getInformationOfGrade(response.course.grade)
          );
          const dataOfUser = await dispatch(
            getInformationOfUser(dataOfCustomer.payload[0].user)
          );
          let sub = [];
          response.course.subjects.forEach(async (subject) => {
            const dataOfSubject = await dispatch(
              getInformationOfSubject(subject)
            );
            sub.push(String(dataOfSubject.payload[0]?.name));
          });
          result.push({
            ...objOfResult,
            grade: String(dataOfGrade.payload[0]?.num),
            subjects: sub,
            customer: dataOfUser.payload?.user?.fullname,
          });
        }
        if (idx === listCourseAPI.length - 1) {
          setListCourse(result);
        }
      });
    };
    tutor.verified && getListCourseOfTutor();
  }, [dispatch]);
  console.log("listCourse: ", listCourse);
  const { TextArea } = Input;
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        setGender("male");
        return;
      case "female":
        setGender("female");
        return;
      case "other":
        setGender("other");
        break;
      default:
    }
  };

  return (
    <div className="tutor-welcome-section">
      <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900 text-center justify-items-center justify-center">
        <p>Xin chúc mừng, bạn đã trở thành một gia sư Bách Khoa chính thức!</p>
      </div>
      <div className="object-section text-blue-900 border-2 shadow-md rounded-md ml-20 mr-20 mt-3 mb-3 bg-gray-200">
        <div className="flex text-center justify-items-center justify-center font-bold text-2xl">
          <p>Profile xịn xò của tôi</p>
        </div>

        <hr className="hover:shadow-job-card m-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="m-10">
          <div className="flex text-center justify-items-center justify-center">
            <img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt=""
              className="w-[220px] h-[220px]max-w-160pxs hover:shadow-job-card rounded-md"
            />
          </div>
          <div className="">
            <div>
              <Form layout="vertical" disabled={false}>
                <Form.Item label="Họ và tên">
                  <Input value={"Lê Thị Như Ý"} />
                </Form.Item>
                <Form.Item label="Giới tính">
                  <Select value={gender} onChange={onGenderChange()}>
                    <Select.Option value="male">Nam</Select.Option>
                    <Select.Option value="female">Nữ</Select.Option>
                    <Select.Option value="other">Khác</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Số điện thoại">
                  <Input value={"0383588527"} />
                </Form.Item>

                <Form.Item label="Tài khoản Momo nhận tiền (hãy liên lạc với trung tâm BKTutor trong trường hợp bạn muốn thay đổi SDT Momo)">
                  <Input value={"0383588527"} disabled />
                </Form.Item>

                <Form.Item label="Thời gian đậu xét tuyển">
                  <Input value={"01-12-2022"} disabled />
                </Form.Item>

                <Form.Item label="Tự giới thiệu">
                  <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                  name="upload"
                  label="Thay đổi avatar"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>
                      Click để tải ảnh lên
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item label="Lưu thông tin">
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {}}
                  >
                    Lưu
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="my-tutor-jobs-list-container m-10">
        <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900">
          <p>Danh sách công việc của tôi</p>
        </div>
        <MyTutorJobsList />
        <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900">
          <p>Bảng lương của tôi</p>
        </div>
        <div>
          <TutorSalary />
        </div>
      </div>
    </div>
  );
}

export default TutorWelcomeSection;
