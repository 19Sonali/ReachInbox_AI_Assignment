import React from "react";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = () => {
  return (
    <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        
      <div className="bg-[#111214] text-center space-y-10 px-8 sm:px-16 py-8 rounded-2xl border border-[#343A40]">
        <h1 className="text-xl font-semibold mt-6">Create a new account</h1>
        <button className="mt-6 border-white/40 border px-20 py-2 text-sm  flex items-center text-[#CCCCCC] rounded-lg cursor-pointer hover:border-white hover:text-white">
        <img src="./images/search.png" alt="google" className="w-4 mr-3"></img>
          <h2>Sign up with Google</h2>
        </button>
        <button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] mx-16 mt-5 px-6 text-sm py-3 rounded-md  hover:from-[#0524BF] hover:to-[#3b5998] cursor-pointer">Create an Account</button>

        <h3 className="my-8 mb-10 text-[#909296]">Already have an account?
        {/* <Link to="/signin" className="text-[#C1C2C5]">
                Sign In
              </Link> */}
              <h4 className="text-[#C1C2C5]">Sign In</h4>
        </h3>
      </div>
      <div>

      </div>
    </div>
  );
};

export default LoginPage;
