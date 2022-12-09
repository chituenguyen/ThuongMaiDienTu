import React from "react";
import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        "month": '10',
        "date": "15,16,23",
        "duration": 'Ca sáng 8:00 AM - 10 AM, Ca chiều 13:00 PM - 15:00 PM',
    },
    {
        key: '2',
        "month": '11',
        "date": "19,20",
        "duration": 'Ca sáng 8:00 AM - 10 AM, Ca chiều 13:00 PM - 15:00 PM',
    },
    {
        key: '3',
        "Tháng": '12',
        "Ngày": "10,11",
        "duration": 'Ca sáng 8:00 AM - 10 AM, Ca chiều 13:00 PM - 15:00 PM',
    },
];

const columns = [
    {
        title: 'Tháng',
        dataIndex: 'month',
        key: 'month',
    },
    {
        title: 'Ngày',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Thời gian diễn ra',
        dataIndex: 'duration',
        key: 'duration',
    },
];



function ExamDate() {

    return (
        <>
            <div className="m-10">
                <p className="text-3xl text-blue-600 font-extrabold text-center">LỊCH THI KÌ THI TUYỂN CHỌN GIA SƯ BÁCH KHOA</p>
                <div className="bg-red-500 flex w-[250px]">
                    <p className="text-2xl text-white font-bold ml-2"> Lịch dự thi:</p>
                </div>
                <div className="mt-3"><Table dataSource={dataSource} columns={columns} />;</div>
                <div className="bg-red-500 flex w-[250px]">
                    <p className="text-2xl text-white font-bold ml-2"> Thông tin dự thi:</p>
                </div>
                <div className="m-3 text-lg">
                    <p className="font-bold text-xl">A. Thông tin chung:</p>
                    <p>
                        1/ Thí sinh phải đến đăng ký và điền thông tin trực tiếp, không nhận đăng ký hộ.
                    </p>
                    <p>
                        2/ Mang theo thẻ sinh viên.
                    </p>
                    <p>
                        3/ Thời hạn đăng ký: Không lớn hơn 30 ngày trước ngày thi và muộn nhất là 7 ngày trước ngày thi.
                        (Hạn đăng ký có thể sớm hơn nếu đã hết chỗ).
                    </p>
                    <p>
                        4/ Thời hạn thay đổi ca thi, bổ sung giấy tờ thủ tục muộn nhất là 3 ngày trước ngày thi.
                    </p>
                    <p>
                        5/ Lệ phí: 30.000 VND / 1 sinh viên / 1 lần thi.
                    </p>
                    <p className="font-bold text-xl">B. Hồ sơ đăng ký dự thi:</p>
                    <p>
                        - 02 Ảnh 3cm x 4cm đúng chuẩn quốc tế.
                    </p>
                    <p>
                        - 01 Bản photo thẻ Sinh Viên.
                    </p>
                </div>
                <div className="bg-red-500 flex w-[250px]">
                    <p className="text-2xl text-white font-bold ml-2"> Ngày trả kết quả:</p>
                </div>
                <div className="m-3 text-lg">
                    <p>- Kết quả có sau ngày thi 10 ngày làm việc, thí sinh nhận tại văn phòng: Lầu 1 nhà H1 (ĐH Bách Khoa Cơ sở 2).</p>
                    <p>- Khi nhận kết quả cần mang theo: phiếu đăng ký dự thi và thẻ Sinh viên.</p>
                </div>

            </div>

        </>
    )
}

export default ExamDate