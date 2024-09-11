import LoginPage from "./Components/LoginPage";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import MainPage from "./Components/Main page/MainPage";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OneBox from "./Components/OneBox";

function App() {
  
  return (
    <div>
      
      
        {/* <Header/> */}
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/Onebox" element={<OneBox/>} />
          
        </Routes>
        {/* <Footer/> */}
      
    </div>
  );
}

export default App;
