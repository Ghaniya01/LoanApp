import React, { useState } from "react";
import {useFormik} from "formik";
import {Schema} from "../Schemas/validatesignup"

export const Form = ({ text, paragraph, organization, username, email, phonenumber,password, buttonText}) => {
    
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
    {initialValues: {
      organization: "", username: "", email: "", phonenumber: "" , password: ""
    }, 
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
        id="organization"
        name="organization" 
        className={`${errors.organization && touched.organization ? "input-error" : ""} w-full text-sm h-[50px] p-2 border border-gray-300 rounded bg-transparent focus:outline-none focus:border-blue-500`}
         placeholder={organization}
         value={values.organization}
         onChange={handleChange}
         onBlur={handleBlur}
         type="text"
         />
          {errors.organization && touched.organization && <p className="errors">{errors.organization}</p>}
        </div>

       
        <div className="input-container mb-[20px] ">
        <input
         id="username"
         name="username" 
         className={`${errors.username && touched.username ? "input-error" : ""} w-full text-sm h-[50px] p-2 border border-gray-300 rounded bg-transparent focus:outline-none focus:border-blue-500`}
         placeholder={username}
         value={values.username}
         onChange={handleChange}
         onBlur={handleBlur}
         
         type="text"
         />
          {errors.username && touched.username && <p className="errors">{errors.username}</p>}
         </div>

        
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


        <div className="input-container mb-[20px] ">
        <input
        id="phonenumber"
        name="phonenumber" 
        className={`${errors.phonenumber && touched.phonenumber ? "input-error" : ""} w-full text-sm h-[50px] p-2 border border-gray-300 rounded bg-transparent focus:outline-none focus:border-blue-500`}
         placeholder={phonenumber}
         value={values.phonenumber}
         onChange={handleChange}
         onBlur={handleBlur}
         type="tel"
         />
         {errors.phonenumber && touched.phonenumber && <p className="errors">{errors.phonenumber}</p>}
         </div>
         

        <div className="flex items-center border border-gray-300 rounded w-full h-[50px]">
        <input
        id="password"
        name="password" 
        type={showPassword ? "text" : "password"}
        className={`${errors.password && touched.password ? "input-error" : ""} w-full h-full text-sm p-2 bg-transparent focus:outline-none`}
        placeholder={password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
       />
       <button
       type="button"
        onClick={togglePasswordVisibility}
        className="text-brandcolor text-sm px-3 "
       >
        {showPassword ? "HIDE" : "SHOW"}
      </button>
      </div>
      {errors.password && touched.password && <p className="errors">{errors.password}</p>}
      
       <button disabled={isSubmitting} type="submit" className="w-full h-[48px] text-sm font-bold p-2 bg-brandcolor text-white rounded-md hover:bg-main br-[8px] mt-[40px]">
        {isSubmitting ? "Submitting..." : buttonText}
        </button>
      </form>
    );
  };
  