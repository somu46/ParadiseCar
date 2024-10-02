import React, { useEffect, useRef, useState } from "react";
import "./Contactform.css";
import BookNowButton from "../Button/Button";
import { useForm } from "react-hook-form";
import {Contactservices } from "../../Services/ApiServices";




const ContactForm = () => {

  const [responce, setresponse] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [err, setErr] = useState("");
  const fromref = useRef();

  


  const handlefromData = (value) => {
   
    try {
      setErr("");
      if (value) {
        setresponse(value);
        fromref.current.reset();
      }
    } catch (error) {
      setErr(error.message || "An unexpected error occurred.");
      console.log(err);
    }
  };

  useEffect(() => {
   
    const postData = async () => {
      if(responce){
      const apiresponse=await Contactservices(responce);
      console.log("Data send successfully : ",apiresponse.data);
    }else{
       console.log("Responce data is empty .");
       
    }
      
    };
    if(responce)   postData();
   

    
  }, [responce]);

  return (
    <div className=" contact-form-container m-0 lg:m-1 w-full lg:w-1/2 p-0 lg:p-3">
      <form
        className="  contact-form mx-0 px-0 lg:mx-3 py-5 lg:px-5"
        onSubmit={handleSubmit(handlefromData)}
        ref={fromref}
      >
        <h1 className="text-center dark:text-sky-900 text-inherit">
          DO YOU HAVE ANY QUESTIONS?
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          {...register("fullName", {
            required: " * Please Enter your name",
          })}
        />
        {errors.fullName && (
          <p className="   text-orange-800  p-1 text-base font-mono ">
            * Please Enter your Name.
          </p>
        )}

        <input
          type="text"
          placeholder="Enter Your Mobile Number"
          {...register("mobileNum", {
            required: true,
            pattern: {
              value: /^[6-9]\d{9}$/, // Regex pattern for 10-digit mobile numbers starting with 6-9
              message: "Please enter a valid 10-digit mobile number",
            },
          })}
        />
        {errors.mobileNum && (
          <p className="   text-orange-800  p-1 text-base font-mono ">
            * {errors.mobileNum.message || " Mobile number required"}.
          </p>
        )}
        <input
          type="email"
          placeholder="Enter Your Email Address"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "* Email address must be a valid address",
            },
          })}
        />
        {errors.email && (
          <p className="   text-orange-800  p-1 text-base font-mono ">
            * Email address is required.
          </p>
        )}
        <textarea
          placeholder="Message"
          {...register("contactMessage", {
            required: true,
          })}
        ></textarea>
        {errors.contactMessage && (
          <p className="   text-orange-700  p-1 text-base font-mono ">
            * We recommend you Please write something.
          </p>
        )}
        <div className="flex justify-center font-semibold text-base mt-4">
          <BookNowButton label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
