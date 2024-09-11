import LoginPage from "./Components/LoginPage";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import MainPage from "./Components/Main page/MainPage";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/Onebox" element={<MainPage />} />
          
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
