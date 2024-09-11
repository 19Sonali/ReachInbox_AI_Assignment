// import React, { useState } from "react";
// import { FaInbox } from "react-icons/fa";

// function SideBar({ onMenuItemClick }) {
//   const [selectedItem, setSelectedItem] = useState("/");
//   const handleMenuItemClick = (path) => {
//     setSelectedItem(path);
//     onMenuItemClick(path);
//   };
//   return (
//     <div className="bg-[#FAFAFA] dark:bg-[#101113] h-screen w-14 flex flex-col  justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] outline-1 fixed z-10">
//       {/* logo */}
//       <div className="rounded-xl">
//         <img
//           className="h-8 rounded-xl object-left overflow-visible"
//           src="./images/logo.png"
//           alt="Logo"
//         />
//       </div>
//       {/* icons */}
//       <div className="text-[#AEAEAE] dark:text-gray-300 text-2xl space-y-10 flex flex-col items-center mb-22">
//         <div
//           className={`hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer ${
//             selectedItem === "/" ? "bg-gray-600 rounded-lg" : ""
//           }`}
//           onClick={() => handleMenuItemClick("/")}
//         >
//           <img src="./images/Home_fill.png" alt="Home" />
//         </div>
//         <div
//           className={`hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer ${
//             selectedItem === "/mail" ? "bg-gray-600 rounded-lg" : ""
//           }`}
//           onClick={() => handleMenuItemClick("/mail")}
//         >
//           <img src="./images/email.png" alt="Email" />
//         </div>
//         <div
//           className={`hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer ${
//             selectedItem === "/mail1" ? "bg-gray-600 rounded-lg" : ""
//           }`}
//           onClick={() => handleMenuItemClick("/mail1")}
//         >
//           <img src="./images/email (1).png" alt="Email 1" />
//         </div>
//         <div
//           className={`hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer ${
//             selectedItem === "/frame" ? "bg-gray-600 rounded-lg" : ""
//           }`}
//           onClick={() => handleMenuItemClick("/frame")}
//         >
//           <img src="./images/Frame 23.png" alt="Frame" />
//         </div>
//         <div
//           className={`hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer ${
//             selectedItem === "/email2" ? "bg-gray-600 rounded-lg" : ""
//           }`}
//           onClick={() => handleMenuItemClick("/email2")}
//         >
//           <img src="./images/email (2).png" alt="Email 2" />
//         </div>
//         <div
//           className={`hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer ${
//             selectedItem === "/Inbox" ? "bg-gray-600 rounded-lg" : ""
//           }`}
//           onClick={() => handleMenuItemClick("/Inbox")}
//         >
//           <FaInbox className="text-gray-400 dark:text-gray-300" />
//         </div>
//         <div
//           className={`hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer ${
//             selectedItem === "/chart" ? "bg-gray-600 rounded-lg" : ""
//           }`}
//           onClick={() => handleMenuItemClick("/chart")}
//         >
//           <img src="./images/bar_chart.png" alt="Bar Chart" />
//         </div>
//       </div>
//       {/* User Avatar */}
//       <div className="flex flex-col items-center">
//         <img
//           src="https://via.placeholder.com/40"
//           alt="User Avatar"
//           className="w-8 h-8 rounded-full mb-2 cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// }

// export default SideBar;

import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";


function SideBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState('/'); // Initialize with the default path

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-xl">
        <img src="./images/logo.png" className="h-8 rounded-xl object-left overflow-visible" alt="Logo" />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10">
        <div className={`cursor-pointer p-1 ${selectedItem === '/' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/')}>
          <RiHome5Fill />
        </div>
        <div className={`cursor-pointer  p-1 ${selectedItem === '/search' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/search')}>
          <RiUserSearchLine />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/mail' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/mail')}>
          <RiMailFill />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/send' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/send')}>
          <IoIosSend />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/stack' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/stack')}>
          <SiElasticstack />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/inbox' ? 'bg-gray-600  rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/inbox')}>
          <FaInbox />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/stacks' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/stacks')}>
          <IoStatsChartSharp />
        </div>
      </div>
      <div className="text-white bg-blue-500 p-2 rounded-full">
        SS
      </div>
    </div>
  );
}

export default SideBar;
