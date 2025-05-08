import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useFormik} from "formik";
import {Schema} from "../schemas/validatelogin"


export const Form = ({ text, paragraph, email, note, buttonText}) => {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };


  const onSubmit = async (values, actions) => {
    console.log("Form Submitted:", values);
    setTimeout(() => {
    actions.resetForm(); 
    actions.setSubmitting(false);  
  }, 1000);
  };

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik(
      {initialValues: { email: "", password: ""}, 
      validationSchema: Schema, 
      onSubmit: onSubmit 
      }
  );

   
  return (
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-main">{text}</h1>
        <h5 className="text-textcolor1 text-lg  mb-[40px]">{paragraph}</h5>


        <div className="input-container mb-[20px] ">
        <input
        id="email"
        name="email" 
        className={`${errors.email && touched.email ? "input-error" : ""} w-full text-sm h-[50px] p-2 border border-gray-300 rounded bg-transparent focus:outline-none focus:border-blue-500`}
        placeholder={email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
         />
         {errors.email && touched.email && <p className="errors">{errors.email}</p>}
         </div>
   
        
       <div className="flex items-center border border-gray-300 rounded w-full h-[50px]">
      <input
      id="password"
      name="password"
      type={showPassword ? "text" : "password"}
      className={`w-full h-full text-sm p-2 bg-transparent focus:outline-none 
      ${errors.password && touched.password ? "input-error" : "border-gray-300"}`}
      placeholder="Enter your password"
      value={values.password}  
      onChange={handleChange} 
      onBlur={handleBlur}  
     />
     <button
      type="button"
      onClick={togglePasswordVisibility}
      className="text-brandcolor text-sm px-3"
    >
      {showPassword ? "HIDE" : "SHOW"}
    </button>
    </div>
    {errors.password && touched.password && <p className="errors">{errors.password}</p>}


    <Link
     to="/forgot-password"
     className="text-brandcolor text-sm mb-[50px] hover:underline">
     {note}
    </Link>
     
    <button disabled={isSubmitting} type="submit" className="w-full h-[48px] text-sm font-bold p-2 bg-brandcolor text-white rounded-md hover:bg-main br-[8px] mt-[40px]">
    {isSubmitting ? "Submitting..." : buttonText}
    </button>
    </form>
    );
  };
  