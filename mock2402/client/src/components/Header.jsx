import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import flagVn from "../assets/flag_vietnam.png";
const Header = () => {
  return (
    <div className="flex text-[12px] items-center justify-center w-full h-[50px]">
      <div className="flex items-center justify-center">
        <img src={flagVn} className="w-[20px] h-[20px]" />
        <p className="ml-1"> Vietnamese </p>
        <IoMdArrowDropdown className="w-[25px] h-[25px]" />
      </div>

      <div className="ml-5">
        <p>Tải ứng dụng Loship:</p>
      </div>

      <button className="ml-2 border-2 hover:text-red-600 hover:border-red-600 border-gray-500 rounded-lg px-2 py-1/2">
        <p>iOS</p>
      </button>

      <button className="ml-2 border-2 hover:text-red-600 hover:border-red-600 border-gray-500 rounded-lg px-2 py-1/2">
        <p>Android</p>
      </button>

      <div className="ml-2">
        <p>- hoặc -</p>
      </div>

      <div className="hover:cursor-pointer flex items-center justify-center ml-2">
        <p> +84 </p>
        <IoMdArrowDropdown className="w-[25px] h-[25px]" />
      </div>

      <div>
        <input className="border-2 border-gray-500 rounded-md" placeholder="Nhập số điện thoại"/>
      </div>

      <div>
        <button className="border-2 border-gray-500 rounded-md ml-2">Gửi link</button>
      </div>

      <div className="ml-5">
        <button>Trở thành đối tác Loship</button>
      </div>

      <div className="ml-5">
        <button>Đi chợ với Lomart</button>
      </div>

      <div className="ml-5">
        <button>Loship Hỏi đáp</button>
      </div>
    </div>
  );
};

export default Header;
