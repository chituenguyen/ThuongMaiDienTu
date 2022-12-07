import React from "react";

const ParentClassList = () => {
  const obj = {
    _id: "6384e8874813251fdaa808cc",
    subjects: ["637dec5e4b510c54b4b87be3", "6384da181308117b992e8763"],
    grade: "637deb268371d38e1eededab",
    description: "Phụ huynh cần gấp",
    status: "PENDING",
    deadline: "2022-11-27T17:00:00.000Z",
    salary: 3000000,
    numberOfStudent: 2,
    startDate: "2022-11-27T17:00:00.000Z",
    endDate: "2022-12-12T17:00:00.000Z",
    customer: "6384e4aa1b3e5b4dad6b0c61",
    __v: 0,
  };

  return (
    <div>
      <div>
        <div>Các môn học: {"Toán"}</div>
        <div>Mô tả: Phụ huynh cần gấp</div>
        <div>Thời gian</div>
        <span>2022-11-27 - </span>
        <span>2022-12-27</span>
        <div>Trạng thái: {"Đang chờ"}</div>
      </div>

      <div>
        <div>Các môn học: {"Toán"}</div>
        <div>Mô tả: Phụ huynh cần gấp</div>
        <div>Thời gian</div>
        <span>2022-11-27 - </span>
        <span>2022-12-27</span>
        <div>Trạng thái: {"Đang chờ"}</div>
      </div>
    </div>
  );
};

export default ParentClassList;
