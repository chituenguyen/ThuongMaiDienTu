import React from "react";
import {
  ClockCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  StopFilled,
  SearchOutlined,
  DollarCircleFilled,
  CalendarOutlined,
  UserOutlined,
  BookOutlined,
  NumberOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import {
  Collapse,
  Col,
  Row,
  Card,
  Button,
  Tag,
  message,
  Popconfirm,
  Skeleton,
  Rate,
} from "antd";
import {
  listToString,
  dateConvert,
  numberWithCommas,
} from "../../constants/common";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/common";
import Applicant from "./Applicant";
import { useSelector } from "react-redux";
import { roleIdSelector } from "../../redux/selectors";

const { Panel } = Collapse;

const ParentClass = ({
  courseId,
  subjects,
  status,
  grade,
  numberOfStudent,
  description,
  deadline,
  salary,
  startDate,
  endDate,
  openInfoModal,
  openConfirmModal,
  setcurrentTutorInfo,
}) => {
  const roleID = useSelector(roleIdSelector);
  console.log(roleID);
  const [currentStatus, setCurrentStatus] = useState(status);
  const [isLoading, setIsLoading] = useState(true);
  const [applicantList, setApplicantList] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState();
  const [acceptedTutor, setAcceptedTutor] = useState();
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${API_URL}/course/${courseId}/applied-tutors`
      );
      setApplicantList(response?.data);

      if (currentStatus === "ONGOING") {
        console.log(
          response?.data.find((applicant) => applicant?.status === "Ongoing")
            ?.tutor
        );
        setAcceptedTutor(
          response?.data.find((applicant) => applicant?.status === "Ongoing")
            ?.tutor
        );
      }

      setIsLoading(false);
    })();
  }, [currentStatus]);

  const acceptTutor = (e) => {
    axios
      .post(`${API_URL}/course/${courseId}/accept-tutor`, {
        tutorId: selectedTutor,
      })
      .then((res) => {
        setCurrentStatus("ONGOING");
        message.success(`Đã nhận ${selectedTutor}`);
      });
  };

  const payCourse = (e) => {
    // TODO: call api

    message.success(`Thanh toán thành công ${courseId}`);
  };

  const cancelCourse = (e) => {
    axios
      .delete(`${API_URL}/course/delete-course-by-customer`, {
        data: {
          data: {
            _id: courseId,
            customer: roleID,
          },
        },
      })
      .then((res) => {
        setCurrentStatus("CANCEL");
        message.success(`Hủy khóa thành công ${courseId}`);
      });
  };

  return (
    <Card
      title={listToString(subjects) + " (" + grade + ")"}
      extra={
        <>
          {currentStatus === "OPEN" && (
            <span className="text-[#f29339] font-bold">
              Đang tìm gia sư{"  "}
              <SearchOutlined
                style={{
                  verticalAlign: "middle",
                }}
              />
            </span>
          )}

          {currentStatus === "ONGOING" && (
            <span className="text-[#2286da] font-bold">
              Đang dạy{"  "}
              <ClockCircleFilled
                style={{
                  verticalAlign: "middle",
                }}
              />
            </span>
          )}

          {currentStatus === "FINISH" && (
            <span className="text-[green] font-bold">
              Hoàn thành{"  "}
              <CheckCircleFilled
                style={{
                  verticalAlign: "middle",
                }}
              />
            </span>
          )}

          {currentStatus === "CANCEL" && (
            <span className="text-[#f29339] font-bold">
              Đã hủy{"  "}
              <StopFilled
                style={{
                  verticalAlign: "middle",
                }}
              />
            </span>
          )}
        </>
      }
      className="my-4"
    >
      <Row>
        <Col span={12}>
          <Row className="mb-1.5">
            <Col span={8}>Môn học:</Col>
            <Col span={15}>
              {subjects.map((subject) => (
                <Tag
                  key={subject}
                  icon={<BookOutlined style={{ verticalAlign: "middle" }} />}
                  color="processing"
                  className="font-bold"
                >
                  {subject}
                </Tag>
              ))}
            </Col>
          </Row>
          <Row className="mb-1.5">
            <Col span={8}>Lớp:</Col>
            <Col span={15}>
              <Tag
                icon={<NumberOutlined style={{ verticalAlign: "middle" }} />}
                color="processing"
                className="font-bold"
              >
                {grade}
              </Tag>
            </Col>
          </Row>
          <Row className="mb-1.5">
            <Col span={8}>Số lượng học sinh:</Col>
            <Col span={15}>
              <Tag
                icon={<UserOutlined style={{ verticalAlign: "middle" }} />}
                color="processing"
                className="font-bold"
              >
                {numberOfStudent}
              </Tag>
            </Col>
          </Row>
          <Row className="mb-1.5">
            <Col span={8}>Thời gian dạy:</Col>
            <Col span={15}>
              <Tag
                icon={<CalendarOutlined style={{ verticalAlign: "middle" }} />}
                color="processing"
                className="font-bold"
              >
                {dateConvert(startDate)}
              </Tag>
              -{"  "}
              <Tag
                icon={<CalendarOutlined style={{ verticalAlign: "middle" }} />}
                color="processing"
                className="font-bold"
              >
                {dateConvert(endDate)}
              </Tag>
            </Col>
          </Row>
          {currentStatus === "OPEN" && (
            <Row className="mb-1.5">
              <Col span={8}>Hạn đăng ký:</Col>
              <Col span={15}>
                <Tag
                  icon={
                    <CalendarOutlined style={{ verticalAlign: "middle" }} />
                  }
                  color="warning"
                  className="font-bold"
                >
                  {dateConvert(deadline)}
                </Tag>
              </Col>
            </Row>
          )}
          <Row className="mb-1.5">
            <Col span={8}>Chi phí:</Col>
            <Tag
              color="success"
              className="font-bold"
              icon={
                <DollarCircleOutlined style={{ verticalAlign: "middle" }} />
              }
            >
              {numberWithCommas(salary)} VND
            </Tag>
          </Row>

          <Row className="mb-1.5">
            <Col span={8}>Mô tả:</Col>
            <Col span={15}>{description}</Col>
          </Row>
        </Col>
        <Col span={12} flex="end">
          {isLoading && <Skeleton active />}

          {currentStatus === "OPEN" && !isLoading && (
            <Collapse>
              <Panel header={"Danh sách ứng tuyển"}>
                {applicantList.length === 0
                  ? "Chưa có ứng viên nào."
                  : applicantList.map((applicant) => (
                      <Applicant
                        key={applicant?._id}
                        id={applicant?.tutor?._id}
                        verified={applicant?.tutor?.verified}
                        fullname={applicant?.tutor?.user?.fullname}
                        phone={applicant?.tutor?.user?.phone_number}
                        gender={applicant?.tutor?.user?.gender}
                        email={applicant?.tutor?.user?.email}
                        degree={applicant?.tutor?.degree}
                        facultity={applicant?.tutor?.facultity}
                        school={applicant?.tutor?.school}
                        description={applicant?.tutor?.description}
                        student_id={applicant?.tutor?.student_id}
                        rate_star={applicant?.tutor?.rate_star}
                        setcurrentTutorInfo={setcurrentTutorInfo}
                        openInfoModal={openInfoModal}
                        acceptTutor={acceptTutor}
                        setSelectedTutor={setSelectedTutor}
                      />
                    ))}
              </Panel>
            </Collapse>
          )}

          {currentStatus === "ONGOING" && !isLoading && (
            <Collapse>
              <Panel
                header={
                  <div>
                    Gia sư:
                    <span className="font-bold">
                      {" "}
                      {acceptedTutor?.user?.fullname}
                    </span>
                  </div>
                }
              >
                <Row>
                  <Col span={8}>Số điện thoại:</Col>
                  <Col span={16}>
                    <div>{acceptedTutor?.user?.phone_number}</div>
                  </Col>
                </Row>

                <Row>
                  <Col span={8}>Giới tính:</Col>
                  <Col span={16}>
                    <div>
                      {acceptedTutor?.user?.gender === "male" ? "Nam" : "Nữ"}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col span={8}>Email:</Col>
                  <Col span={16}>
                    <div>{acceptedTutor?.user?.email}</div>
                  </Col>
                </Row>

                {acceptedTutor?.degree && (
                  <Row>
                    <Col span={8}>Trình độ:</Col>
                    <Col span={16}>
                      <div>{acceptedTutor?.degree}</div>
                    </Col>
                  </Row>
                )}

                <Row>
                  <Col span={8}>Trường:</Col>
                  <Col span={16}>
                    <div>{acceptedTutor?.school}</div>
                  </Col>
                </Row>

                <Row>
                  <Col span={8}>Khoa:</Col>
                  <Col span={16}>
                    <div>{acceptedTutor?.facultity}</div>
                  </Col>
                </Row>

                <Row>
                  <Col span={8}>Giới thiệu:</Col>
                  <Col span={16}>
                    <div>{acceptedTutor?.description}</div>
                  </Col>
                </Row>

                <Row>
                  <Col span={8}>MSSV:</Col>
                  <Col span={16}>
                    <div>{acceptedTutor?.student_id}</div>
                  </Col>
                </Row>

                <Row>
                  <Col span={8}>Đánh giá:</Col>
                  <Col span={16}>
                    <Rate disabled defaultValue={acceptedTutor?.rate_star} />
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          )}

          {currentStatus === "FINISH" && !isLoading && (
            <div>
              <div>Xem nhận xét</div>
            </div>
          )}

          {currentStatus === "CANCEL" && !isLoading && (
            <div>
              <div>Xem nhận xét</div>
            </div>
          )}
        </Col>
      </Row>

      <Row>
        <Col span={24} className="text-right">
          {currentStatus === "ONGOING" && (
            <Popconfirm
              title="Bạn có chắc chắn muốn thanh toán cho gia sư không?"
              onConfirm={payCourse}
              okText="Đồng ý"
              cancelText="Không"
            >
              <Button
                className="mt-2 ml-1 bg-[#a8e890] font-bold"
                icon={
                  <DollarCircleFilled style={{ verticalAlign: "middle" }} />
                }
              >
                Thanh toán
              </Button>
            </Popconfirm>
          )}

          {(currentStatus === "FINISH" || currentStatus === "CANCEL") && (
            <Button
              className="mt-2 bg-[#2286da] font-bold"
              icon={<DollarCircleFilled style={{ verticalAlign: "middle" }} />}
            >
              Xem đánh giá
            </Button>
          )}

          {currentStatus !== "FINISH" && (
            <Popconfirm
              title="Bạn có chắc chắn muốn hủy lớp này không?"
              onConfirm={cancelCourse}
              okText="Đồng ý"
              cancelText="Không"
            >
              <Button
                className="mt-2 ml-1 bg-red-400 text-white font-bold"
                icon={<CloseCircleFilled style={{ verticalAlign: "middle" }} />}
              >
                Huỷ lớp
              </Button>
            </Popconfirm>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default ParentClass;