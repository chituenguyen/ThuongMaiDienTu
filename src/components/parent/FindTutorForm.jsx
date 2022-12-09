import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

const FindTutorForm = () => {
  const [inputs, setInputs] = useState({});
  const [subjects, setSubjects] = useState([
    { name: "Toán", value: "math" },
    { name: "Lý", value: "physics" },
    { name: "Hóa", value: "chemistry" },
    { name: "Sinh", value: "biology" },
    { name: "Tiếng Anh", value: "english" },
  ]);

  const [grades, setGrades] = useState([
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "11", value: 11 },
    { name: "12", value: 12 },
    { name: "Đại học", value: 13 },
  ]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="flex flex-col py-10">
      <div className="place-self-center w-1/2 p-5">
        <h1 className="text-4xl mb-3 text-center font-bold">Tìm gia sư</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-5 bg-[#ecf4fa] rounded-md"
        >
          <label>
            Môn học:<span>&nbsp;</span>
            <select
              className="h-[35px] mb-3 rounded-md px-2 border-2 text-black"
              name="subject"
              value={inputs.subject}
              onChange={handleChange}
            >
              {subjects.map((subject) => {
                return <option value={subject.value}>{subject.name}</option>;
              })}
            </select>
          </label>
          <label>
            Lớp:<span>&nbsp;</span>
            <select
              className="h-[35px] mb-3 rounded-md px-2 border-2 text-black"
              name="grade"
              value={inputs.grade}
              onChange={handleChange}
            >
              {grades.map((grade) => {
                return <option value={grade.value}>{grade.name}</option>;
              })}
            </select>
          </label>

          <label>
            Mức lương:<span>&nbsp;</span>
            <input
              className="h-[35px] mb-3 rounded-md px-2 border-2 text-black"
              type="number"
              name="salary"
              value={inputs.salary || ""}
              onChange={handleChange}
            />
            <span>&nbsp;</span>VND/giờ
          </label>
          <label>
            Số lượng học sinh:<span>&nbsp;</span>
            <input
              className="h-[35px] mb-3 rounded-md px-2 border-2 text-black"
              type="number"
              name="quantity"
              value={inputs.quantity || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Ngày bắt đầu:<span>&nbsp;</span>
            <input
              className="h-[35px] mb-3 rounded-md px-2 border-2 text-black"
              type="date"
              name="startDate"
              value={inputs.startDate || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            Ngày kết thúc:<span>&nbsp;</span>
            <input
              className="h-[35px] mb-3 rounded-md px-2 border-2 text-black"
              type="date"
              name="endDate"
              value={inputs.endDate || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            Mô tả:<span>&nbsp;</span>
          </label>
          <textarea
            className="rounded-md mb-3 px-2 border-2 text-black"
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          ></textarea>
          
          <button
            type="submit"
            className="bg-[#0E78C4] p-2 w-fit place-self-center text-white mt-2 font-bold"
          >
            Đăng việc
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindTutorForm;
