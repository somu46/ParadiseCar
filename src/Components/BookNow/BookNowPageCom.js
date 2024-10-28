import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import "./BookNow.css";
import BookNowButton from "../../Components/Button/Button";
import BookNowCarImg from "./../../Assets/Subho bijaya.jpeg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookNowPageCom = () => {
  const [selectedPicupDate, setSelectedpicupDate] = useState(null);
  const [selectedDropoffDate, setSelectedDropoffDate] = useState(null);
  const [airportOpt, setAirportOpt] = useState(" ");
  const formRef=useRef()

  
  const [err, setErr] = useState("");
  
  const {
    register,
    setValue, //manualy update value
    setError, // Manually set an error
    clearErrors, // Clear the error when needed
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  
  // for srom data submmistion

  const handleBookFromData = (data) => {
  
    setErr(""); // at frist we counter error as empty

    try {
      console.log(data);

     

      // console.log(value);
      formRef.current.reset();
    } catch (error) {
      setErr(error);
      console.log(err);
    }
  };

  return (
    <>
      <div className="  w-full lg:w-[100%] mb-[15rem] lg:mb-3 lg:h-auto flex justify-center items-center text-black ">
        <div className=" background-image flex flex-wrap flex-col lg:flex-row justify-between border-red-500   border-2 shadow-lg rounded-md w-[100%] h-auto  p-1 lg:overflow-hidden" >
          {/* Left Section (Form & Text) */}
          <div className="w-full md:w-1/2 md:h-auto flex flex-col justify-start lg:codep-5 border-2 border-blue-600 ">
            <div className="mb-6">
              <h6 className="text-3xl font-bold text-start text-orange-600 mb-2">
                Booking for Outstation Trip
              </h6>
              <h6 className="text-lg font-semibold text-start text-red-600">
                Estimated Fare ₹ 16.00 per/km
              </h6>
            </div>
            {/* Form */}

            <form
              className="flex flex-wrap flex-col gap-4 "
              onSubmit={handleSubmit(handleBookFromData)}
              ref={formRef} 
            >
              <div className="  flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-3 mb-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 border-2 border-gray-300 rounded-lg bg-sky-50 w-full lg:w-1/2 mb-3 lg:mb-0 "
                  {...register("fullName", {
                    required: true,
                  })}
                />
                {errors.fullName && (
                  <h6 className="  absolute text-orange-600 ml-3 mt-[2.8rem]  p-1 ">
                    *Name is required.
                  </h6>
                )}
                <input
                  type="text"
                  placeholder="10 Digit Mobile No"
                  className="p-3 border-2 border-gray-300 rounded-lg bg-sky-50 dark:text-inherit w-full lg:w-1/2 mb-3 lg:mb-0"
                  {...register("MobileNum", {
                    required: true,
                    pattern: {
                      value: /^[0-9]{10}$/, // Optional: for validating a 10-digit number
                      message: "*Invalid Mobile Number",
                    },
                  })}
                />
                {errors.MobileNum && (
                  <h6 className="absolute left-[5rem]  lg:left-[27rem] flex lg:mt-[2.8rem] bottom-10 lg:bottom-auto  p-1  text-orange-600">
                    {errors.MobileNum.message || "* Mobile Number is required."}
                  </h6>
                )}
              </div>
              <input
                type="text"
                placeholder="Enter your Destination"
                className="  p-3 border-2 border-gray-300 bg-sky-50 rounded-lg"
                {...register("destinationLocation", {
                  required: true,
                })}
              />
              {errors.destinationLocation && (
                <h6 className="   text-orange-700 ml-3 p-0 my-0 ">
                  * Drop off Location is required.
                </h6>
              )}
              <input
                type="text"
                placeholder="Pick up Address"
                className="p-3 border-2 border-gray-300 rounded-lg bg-sky-50"
                {...register("PicUpLocation", {
                  required: true,
                })}
              />
              {errors.PicUpLocation && (
                <h6 className="   text-orange-700 ml-3 p-0 my-0 ">
                  * Pick Up Location is required.
                </h6>
              )}

              <div className=" flex lg:flex-nowrap flex-wrap  justify-between gap-4">
                <div className=" flex flex-wrap flex-col  rounded-md w-full">
                  {/* <label className="px-3 text-start ">Pickup Date</label> */}
                  <DatePicker
                    selected={selectedPicupDate}
                    onChange={(date) => {
                      setSelectedpicupDate(date);
                      setValue("PickDateTime", date);
                      
                      if(!date){
                        setError("PickDateTime",{
                          message:"* pick up date and time is required"
                        })
                      }else{
                        clearErrors("PickDateTime")
                      }
                      
                    }}
                    showTimeSelect
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="p-3 border-2 border-gray-300  rounded-lg w-full "
                    placeholderText="Select Pickup Date and Time"
                  />
                                   
                  <input
                    type="hidden"
                    {...register("PickDateTime", {
                      required: " *Pickup date is required",
                    })}
                  />
                  {errors.PickDateTime && (
                    <h6 className="text-red-600 mt-1">
                      {errors.PickDateTime.message}
                    </h6>
                  )}
                </div>
                <div className=" flex flex-wrap flex-col  w-full">
                  {/* <label className="px-3 text-start">DropOff Date</label> */}

                  <DatePicker
                    selected={selectedDropoffDate}
                    onChange={(date) => {
                      setSelectedDropoffDate(date);
                      setValue("dropOffDateTime", date);

                      if (!date) {
                        setError("dropOffDateTime", {
                          message: " *drop off date and time is required",
                        });
                      } else {
                        clearErrors("dropOffDateTime");
                      }
                    }}
                    showTimeSelect
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="p-3 border-2 border-gray-300  rounded-lg w-full"
                    placeholderText="Select Drop off  Date and Time"
                  />
                  {/* Manually setting the required validation */}
                  <input
                    type="hidden"
                    {...register("dropOffDateTime", {
                      required: "*drop off date is required",
                    })}
                  />
                  {errors.dropOffDateTime && (
                    <h6 className="text-red-600 mt-1">
                      {errors.dropOffDateTime.message}
                    </h6>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap flex-col bg-inherit">
                {/* <label className="text-start">Trip Type</label> */}

                <select
                  {...register("tripType", {
                    required: " Please selact your trip Type ", // Custom required message
                  })}
                  onChange={(e) => {
                    const tripData = e.target.value;
                    setAirportOpt(tripData);
                    setValue("tripType", tripData);
                    
                      if(!tripData){
                        setError("tripType",{
                              message:" Please selact  your trip Type"
                        })
                      }else{
                        clearErrors("tripType");
                      }

                  }}
                  className="p-3 border-2 bg-inherit border-gray-300 rounded-lg "
                >
                  <option value="" >Please select a Trip Type</option> 
                  <option value="oneWay">ONE WAY</option>
                  <option value="roundTrip">ROUND TRIP</option>
                  <option value="airPort">AIRPORT</option>
                </select>
                {/* Error Message */}
                {errors.tripType && (
                  <h6 className="text-orange-700 ml-3 p-0 my-0">
                    * {errors.tripType.message} {/* Dynamic error message */}
                  </h6>
                )}
                {airportOpt === "airPort" && (
                  <>
                  <select
                    className=" flex items-center mt-5 justify-center p-3 border-2 max-w-[50%] border-gray-300 rounded-lg"
                    {...register("airPortOptation", {
                      required: "please select a optaion",
                    })}
                  >
                    <option value="">Please select type</option>
                    <option value="DropToAirport">Drop to Airport</option>
                    <option value="PickFromAirport">Pickup from Airport</option>
                  </select> 

                  {errors.airPortOptation && (
                    <h6 className="text-orange-700 ml-3 p-0 my-0">
                        * {errors.airPortOptation.message} 
                    </h6>
                  ) }
                  </>
                )}
              </div>

              <div>
                <BookNowButton label="Rent Now " />
              </div>
            </form>
          </div>

          {/* Right Section (Image) */}
          <div className="mx-1 md:flex md:w-[49%] h-auto md:h-[80vh] md:relative md:overflow-hidden border-2 border-green-500">
  <img
    src={BookNowCarImg}
    alt="Book Now poster"
    className="w-full h-full object-cover shadow-md rounded-md"
  />
</div>

        </div>
      </div>
    </>
  );
};


export default BookNowPageCom;