import React from "react";
import { FaInbox } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="bg-[#101113] h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 border-[#343A40] outline-1 fixed z-10">
      {/* logo */}
      <div className="rounded-xl">
        <img
          className="h-8 rounded-xl object-left overflow-visible"
          src="./images/logo.png"
          alt=""
        />
      </div>
      {/* icons */}
      <div className="text-[#AEAEAE] text-2xl space-y-10 flex flex-col items-center mb-22">
        <div className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
          <img src="./images/Home_fill.png" alt="" />
        </div>
        <div className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
          <img src="./images/email.png" alt="" />
        </div>
        <div className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
          <img src="./images/email (1).png" alt="" />
        </div>
        <div className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
          <img src="./images/Frame 23.png" alt="" />
        </div>
        <div className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
          <img src="./images/email (2).png" alt="" />
        </div>
        <div className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
          <FaInbox />
        </div>
        <div className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
          <img src="./images/bar_chart.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-8 h-8 rounded-full mb-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SideBar;
