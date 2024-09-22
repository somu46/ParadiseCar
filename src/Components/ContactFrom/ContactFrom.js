import React, { useRef, useState } from "react";
import "./Contactform.css";
import BookNowButton from "../Button/Button";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, setValue, setError, clearErrors, handleSubmit, formState: { errors }, } = useForm();
  const [err,setErr]=useState("");
  const fromref=useRef();

  const handlefromData=(value)=>{
     setErr("");
     try{
         
     }catch(error){
      setErr(error);
      console.log(err);
      
     }
  }

  return (
    <div className=" contact-form-container m-0 lg:m-1 w-full lg:w-1/2 p-0 lg:p-3">
      <form
       className="  contact-form mx-0 px-0 lg:mx-3 py-5 lg:px-5"
       ref={fromref}
       >
        <label className="text-center dark:text-sky-900 text-inherit">
          DO YOU HAVE ANY QUESTIONS?
        </label>
        <input
         type="text" 
         placeholder="Enter Your Name"
         {
          ...register("fullname",{
            required:" * Please Enter your name"
          })
         }
          />
        <input
         type="text" 
         placeholder="Enter Your Mobile Number"
         {
          ...register("mobileNum",{
            required:"* Mobile number required",
            pattern: {
              value: /^[6-9]\d{9}$/, // Regex pattern for 10-digit mobile numbers starting with 6-9
              message: "Please enter a valid 10-digit mobile number",
            }
          })
         }
         />
        <input 
        type="email"
         placeholder="Enter Your Email Address" 
         
        />
        <textarea placeholder="Message"></textarea>

        <div className="flex justify-center font-semibold text-base mt-4">
          <BookNowButton label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
