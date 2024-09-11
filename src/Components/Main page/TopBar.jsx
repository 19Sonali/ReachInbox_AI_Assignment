import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Toggle from "./Toggle";

const TopBar = () => {
  return (
    <div className="h-16 w-screen bg-white  dark:bg-[#1F1F1F] text-black dark:text-white fixed px-14  top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <div className='text-base font-bold dark:text-white text-[#5B5F66] ml-5'>Onebox</div>

      <div className="pr-10 flex items-center mx-3 px-14">
        <div className="flex items-center mt-3.5 outline-white outline-1">
          <Toggle />
        </div>
        <div className="ml-3 flex items-center">
          Tim's Workspace 
          <MdOutlineKeyboardArrowDown className="text-3xl ml-3" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
