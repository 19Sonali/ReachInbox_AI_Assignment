import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "./Main page/SideBar";
import TopBar from "./Main page/TopBar";
import InitialView from "./Main page/InitialView";
import AllInbox from "./Main page/AllInbox";

const OneBox = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      // navigate("/");
    } else {
      localStorage.setItem("token", `Bearer ${token}`);
      console.log("token", token);
    }
  }, [token, navigate]);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white flex">
      {/* Sidebar */}
      <div className="w-14 h-full">
        <SideBar onMenuItemClick={handleMenuItemClick} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 overflow-auto">
          {selectedComponent === null && <InitialView />}
          {selectedComponent === "/" && <InitialView />}
          {selectedComponent === "/search" && <InitialView />}
          {selectedComponent === "/mail" && <InitialView />}
          {selectedComponent === "/send" && <InitialView />}
          {selectedComponent === "/stack" && <InitialView />}
          {selectedComponent === "/inbox" && <AllInbox />}
          {selectedComponent === "/stacks" && <InitialView />}
        </div>
      </div>
    </div>
  );
};

export default OneBox;
