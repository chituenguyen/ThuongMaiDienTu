import signin from "../../assets/signin.png";


function TutorWelcomeSection() {

    return (
        <div className="tutor-welcome-section">
            <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900 text-center justify-items-center justify-center">
                <p>Hãy đăng nhập để tìm hiểu kỹ hơn quy trình trở thành một gia sư Bách Khoa</p>
                <p> và được chúng tôi hỗ trợ tốt nhất nhé!</p>
                <div className="flex">
                <img
                        src={signin}
                        alt=""
                        className="h-[600px] m-auto"
                />
                </div>
                <button
                        className="text-2xl focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        type="button"
                        onClick={() => {}}
                    >
                        Đăng nhập ở đây
                </button>
            </div>
        </div>
    )
}

export default TutorWelcomeSection