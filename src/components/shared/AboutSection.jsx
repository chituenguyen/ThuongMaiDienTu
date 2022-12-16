import React from "react";
import { Table } from 'antd';
import aboutUsBG from '../../assets/aboutUsBG.png';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AboutSection() {
    const navigate = useNavigate();
    const userInfo = useSelector((state) =>
        state.userLogin.userInfo.length == 0 ? [] : state.userLogin.userInfo
    );
    const handleLogin = () => {
        // dispatch(logoutUser());
        navigate("/register");
      };
    return (
        <>
            <div>


            </div>
            <div className="bg text-white pt-10 mt-3" style={{
                backgroundImage: "url(https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                height: '70vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="text-4xl pt-10 font-bold text-center">Tham gia cùng chúng tôi</div>
                <div className="text-4xl mt-5 text-center">Gia sư Bách Khoa - kết nối giáo dục và truyền cảm hứng</div>
                {(!userInfo || userInfo.length === 0) && (
                    <div className="flex text-center justify-items-center justify-center mt-20 font-bold">
                        <button
                        onClick={() => handleLogin()}
                        className="focus:outline-none font-bold text-white bg-bktutor-blue hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                           Click vào đây để kết nối với BKTutor ngay hôm nay
                        </button>
                    </div>
                )}
            </div>
            <div className="pt-10">
                <div className="text-4xl mb-5 font-bold text-bktutor-blue text-center">Chúng tôi là ai?</div>
                <p className="pl-20 pr-20 font-2xl">
                    Đầu từ đầu năm 2019, một nhóm bạn trẻ mang trong mình hoài bão đã vô tình nghe được câu chuyện về những khó khăn trong việc dạy và học. Từ đó, những ý tưởng bắt đầu len lỏi trong họ, những câu hỏi được đặt ra nhằm đưa đến một giải pháp giáo dục toàn diện, tạo hàng chục ngàn việc làm cho các sinh viên Bách Khoa. Với mong muốn góp một chút sức mình cho sự nghiệp dạy và học...
                </p>
            </div>
            <div className="pt-10">
                <div className="text-4xl mb-5 font-bold text-bktutor-blue text-center">Và kể từ đó, gia sư Bách Khoa ra đời!</div>
                <p className="pl-20 pr-20 mb-5 font-2xl">
                    Gia sư Bách Khoa - Cầu nối trung gian kết nối các bạn gia sư với khách hàng tìm năng, với đối tượng là sinh viên Bách Khoa (với mục tiêu trong tương lai là sinh viên các trường thuộc khối Đại học Quốc gia và hơn nữa) và các bậc phụ huynh trong nội thành TP. HCM
                </p>
            </div>
            <div className="pt-10">
                <div className="text-4xl mb-5 font-bold text-bktutor-blue text-center">Gia sư Bách Khoa, nền tảng kết nối gia sư và phụ huynh 4.0</div>
                <p className="pl-20 pr-20 mb-5 font-2xl text-center">
                    Mục tiêu chúng tôi đặt ra cho chính mình không phải là điều có thể dễ dàng đạt được. Nhưng chúng tôi tin rằng một ngày nào đó , mỗi người dân ( phụ huynh và học sinh ) có thể tiếp cận kiến thức một cách chủ động nhất có thể , thoải mái dễ dàng.
                </p>
                <p className="pl-20 pr-20 mb-5 font-2xl text-center">
                    Mỗi ngày trôi qua, chúng tôi ngày một chắc chắn về điều đó. Bởi chúng tôi có bạn - những khách hàng thân yêu có thể giúp chúng tôi hoàn thành mục tiêu của mình.Và đó đích thị là những gì mà BKTutor mong muốn . Đưa mọi người gần nhau hơn vì một cuộc sống tốt hơn cho tất cả.
                </p>
            </div>

        </>
    )
}

export default AboutSection