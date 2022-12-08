import React from "react";
import user from "../../assets/user.png";
import { MdOutlineExpandMore } from "react-icons/md";
const Comments = () => {
  return (
    <div className="px-[68px] py-5 bg-[#F8F8F8]">
      <h1 className="text-center text-3xl mb-5">NHẬN XÉT CỦA NGƯỜI DÙNG</h1>
      <div className="flex items-center justify-center gap-4">
        <button className="button-header bg-teal-100">Của phụ huynh</button>
        <button className="button-header border-2">Của Gia sư</button>
      </div>
      <div className="grid grid-cols-3 gap-20 mt-5">
        <div className="bg-white rounded-md">
          <div className="flex justify-center flex-col items-center mt-5">
            <img src={user} alt="" className="w-[80px]" />
            <p>Samantha Payne</p>
            <p className="text-red-400">Phụ huynh</p>
          </div>
          <div className="px-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              rerum aut aliquam expedita ullam ex incidunt asperiores,
              laboriosam odio suscipit adipisci temporibus mollitia sint odit
              dolore autem voluptatem qui esse.{" "}
            </p>
            <p className="flex items-center">
              Show more <MdOutlineExpandMore />
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div className="flex justify-center flex-col items-center mt-5">
            <img src={user} alt="" className="w-[80px]" />
            <p>Samantha Payne</p>
            <p className="text-red-400">Phụ huynh</p>
          </div>
          <div className="px-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              rerum aut aliquam expedita ullam ex incidunt asperiores,
              laboriosam odio suscipit adipisci temporibus mollitia sint odit
              dolore autem voluptatem qui esse.{" "}
            </p>
            <p className="flex items-center">Show more <MdOutlineExpandMore/></p>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div className="flex justify-center flex-col items-center mt-5">
            <img src={user} alt="" className="w-[80px]" />
            <p>Samantha Payne</p>
            <p className="text-red-400">Phụ huynh</p>
          </div>
          <div className="px-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              rerum aut aliquam expedita ullam ex incidunt asperiores,
              laboriosam odio suscipit adipisci temporibus mollitia sint odit
              dolore autem voluptatem qui esse.{" "}
            </p>
            <p className="flex items-center">Show more <MdOutlineExpandMore/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
