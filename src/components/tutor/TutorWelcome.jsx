import TutorSalary from "./TutorSalary";
import TutorClassList from "./dashboard/TutorClassList";

function TutorWelcomeSection() {
  return (
    <div className="tutor-welcome-section">
      <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900 text-center justify-items-center justify-center">
        <p>Xin chúc mừng, bạn đã trở thành một gia sư Bách Khoa chính thức!</p>
      </div>
      <div className="my-tutor-jobs-list-container m-10">
        <div className="flex-rows mb-10 text-3xl mt-10 mb-7 font-bold text-blue-900">
          <p>Danh sách công việc của tôi</p>
        </div>
        <TutorClassList/>
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
