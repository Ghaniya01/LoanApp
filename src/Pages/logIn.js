import React from "react";
import logo from "../Assets/Images/logo.png";
import loginImage from "../Assets/Images/loginImage.png";
import { useNavigate } from "react-router-dom";
import {Form } from "../Forms/loginform"

export const LogIn = () => {
  

  return (
    <div className="w-screen h-screen bg-primary flex flex-col lg:flex-row items-center lg:justify-between relative">
      
      <img
        src={logo}
        alt="Logo"
        className="absolute top-6 left-6 lg:top-[106px] lg:left-[97px] w-[120px] lg:w-[173.76px] h-[30px] lg:h-[36px]"
      />

      
      <div className="flex flex-1 flex-col lg:flex-row items-center w-full h-full">
        
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] lg:w-[600px] lg:h-[337.57px]"
          />
        </div>

        
        <div className="w-full h-full lg:w-1/2 flex items-center justify-center bg-primary shadow-lg px-6">
          <Form
            text="Welcome!"
            paragraph="Enter details to login."
            email="Enter your Email"
            password="Enter your Password"
            note="FORGOT PASSWORD?"
            buttonText="LOG IN"
          />
        </div>
      </div>
    </div>
  );
};
