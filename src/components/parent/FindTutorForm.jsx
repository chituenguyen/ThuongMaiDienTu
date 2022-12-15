import React from "react";
import { useState } from "react";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";
import { subjects, grades } from "../../constants/common";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FindTutorForm = () => {
  const [inputs, setInputs] = useState({});

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col py-10">
      <div className="place-self-center w-1/2 p-5">
        <h1 className="text-4xl mb-3 text-center font-bold">Tìm gia sư</h1>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Lớp"
            name="grade"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn lớp!",
              },
            ]}
          >
            <Select
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Chọn lớp"
            >
              {grades.map((grade) => (
                <Select.Option key={grade.value} value={grade.value}>
                  {grade.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Môn học"
            name="subjects"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn các môn học!",
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Chọn các môn học"
            >
              {subjects.map((subject) => (
                <Select.Option key={subject.value} value={subject.value}>
                  {subject.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Số lượng học sinh"
            name="numberOfStudent"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số lượng học sinh!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Thời gian"
            name="range"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn thời gian!",
              },
            ]}
          >
            <RangePicker />
          </Form.Item>

          <Form.Item
            label="Tiền công"
            name="salary"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tiền công!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Hạn đăng ký"
            name="deadline"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn hạn đăng ký!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mô tả!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 11,
              span: 13,
            }}
          >
            <Button type="primary" htmlType="submit" className="font-bold">
              Đăng việc
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FindTutorForm;
