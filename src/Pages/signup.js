import React from "react";
import logo from "../assets/Images/logo.png";
import loginImage from "../assets/Images/loginImage.png";
import { Form } from "../forms/signupform";
import { useNavigate } from "react-router-dom";


export const Signup =()=>{

     
      const navigate = useNavigate("");
      const handleLogin = () => {
        navigate("/dashboard");
      };

    return(
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
               paragraph="Enter your details to Get Started."
               organization="Organization"
               username="Username"
               email= "Email"
               phonenumber= "Phone Number"
               password= "Password"
               buttonText="SIGN UP"
               
             />
           </div>
         </div>
       </div>
    )
}