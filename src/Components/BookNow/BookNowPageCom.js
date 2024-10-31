import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useStore from "../../Store/store";
import BookNowButton from "../../Components/Button/Button";
import BookNowCarImg from "../../Assets/HappyDiwali.jpg";

import "./BookNow.css";

const BookNowPageCom = () => {
  const [selectedPicupDate, setSelectedPicupDate] = useState(null);
  const [selectedDropoffDate, setSelectedDropoffDate] = useState(null);
  const [airportOpt, setAirportOpt] = useState("");
  const { isStoreDarkMode } = useStore();
  const formRef = useRef();

  const [err, setErr] = useState("");

  const {
    register,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBookFromData = (data) => {
    setErr("");
    try {
      console.log(data);
      formRef.current.reset();
    } catch (error) {
      setErr(error);
      console.log(err);
    }
  };

  return (
    <div
      className={`w-full lg:w-[100%] mb-[15rem] lg:mb-3 lg:h-auto flex justify-center items-center ${
        isStoreDarkMode ? "text-white bg-gray-900" : "text-black bg-sky-50"
      }`}
    >
      <div className="background-image flex flex-wrap flex-col lg:flex-row justify-between shadow-lg rounded-md w-[100%] h-auto p-1 lg:overflow-hidden">
        {/* Left Section (Form & Text) */}
        <div className="w-full md:w-1/2 flex flex-col justify-start lg:codep-5">
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
            className="flex flex-wrap flex-col gap-4"
            onSubmit={handleSubmit(handleBookFromData)}
            ref={formRef}
          >
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-3 mb-2">
              <input
                type="text"
                placeholder="Full Name"
                className={`p-3 border-2 border-gray-300 rounded-lg w-full lg:w-1/2 mb-3 lg:mb-0 ${
                  isStoreDarkMode ? "bg-gray-800 text-white" : "bg-sky-50"
                }`}
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <h6 className="absolute text-orange-600 ml-3 mt-[2.8rem] p-1">
                  *Name is required.
                </h6>
              )}
              <input
                type="text"
                placeholder="10 Digit Mobile No"
                className={`p-3 border-2 border-gray-300 rounded-lg w-full lg:w-1/2 mb-3 lg:mb-0 ${
                  isStoreDarkMode ? "bg-gray-800 text-white" : "bg-sky-50"
                }`}
                {...register("MobileNum", {
                  required: true,
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "*Invalid Mobile Number",
                  },
                })}
              />
              {errors.MobileNum && (
                <h6 className="absolute left-[5rem] lg:left-[27rem] flex lg:mt-[2.8rem] bottom-10 lg:bottom-auto p-1 text-orange-600">
                  {errors.MobileNum.message || "* Mobile Number is required."}
                </h6>
              )}
            </div>
            <input
              type="text"
              placeholder="Enter your Destination"
              className={`p-3 border-2 border-gray-300 rounded-lg ${
                isStoreDarkMode ? "bg-gray-800 text-white" : "bg-sky-50"
              }`}
              {...register("destinationLocation", { required: true })}
            />
            {errors.destinationLocation && (
              <h6 className="text-orange-700 ml-3 p-0 my-0">
                * Drop off Location is required.
              </h6>
            )}
            <input
              type="text"
              placeholder="Pick up Address"
              className={`p-3 border-2 border-gray-300 rounded-lg ${
                isStoreDarkMode ? "bg-gray-800 text-white" : "bg-sky-50"
              }`}
              {...register("PicUpLocation", { required: true })}
            />
            {errors.PicUpLocation && (
              <h6 className="text-orange-700 ml-3 p-0 my-0">
                * Pick Up Location is required.
              </h6>
            )}
            <div className="flex lg:flex-nowrap flex-wrap justify-between gap-4 ">
            <div className=" flex flex-wrap flex-col  rounded-md w-full">
              <DatePicker
                selected={selectedPicupDate}
                onChange={(date) => {
                  setSelectedPicupDate(date);
                  setValue("PickDateTime", date);
                  if (!date) {
                    setError("PickDateTime", {
                      message: "* Pickup date and time is required",
                    });
                  } else {
                    clearErrors("PickDateTime");
                  }
                }}
                showTimeSelect
                timeFormat="hh:mm aa"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className={`p-3 border-2 border-gray-300 rounded-lg w-full  ${
                  isStoreDarkMode ? "bg-gray-800 text-white" : ""
                }`}
                placeholderText="Select Pickup Date and Time"
              />
              <input type="hidden" {...register("PickDateTime", { required: " *Pickup date is required" })} />
              {errors.PickDateTime && (
                <h6 className="text-red-600 mt-1">
                  {errors.PickDateTime.message}
                </h6>
              )}
              </div>
              <div className=" flex flex-wrap flex-col  rounded-md w-full">
              <DatePicker
                selected={selectedDropoffDate}
                onChange={(date) => {
                  setSelectedDropoffDate(date);
                  setValue("dropOffDateTime", date);
                  if (!date) {
                    setError("dropOffDateTime", {
                      message: "* Drop off date and time is required",
                    });
                  } else {
                    clearErrors("dropOffDateTime");
                  }
                }}
                showTimeSelect
                timeFormat="hh:mm aa"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className={`p-3 border-2 border-gray-300 rounded-lg w-full ${
                  isStoreDarkMode ? "bg-gray-800 text-white" : ""
                }`}
                placeholderText="Select Drop off Date and Time"
              />
              <input type="hidden" {...register("dropOffDateTime", { required: "* Drop off date is required" })} />
              {errors.dropOffDateTime && (
                <h6 className="text-red-600 mt-1">
                  {errors.dropOffDateTime.message}
                </h6>
              )}
              </div>
            </div>
            <div className="flex flex-wrap flex-col">
              <select
                {...register("tripType", { required: "Please select your trip Type" })}
                onChange={(e) => {
                  const tripData = e.target.value;
                  setAirportOpt(tripData);
                  setValue("tripType", tripData);
                  if (!tripData) {
                    setError("tripType", { message: "Please select your trip Type" });
                  } else {
                    clearErrors("tripType");
                  }
                }}
                className={`p-3 border-2 border-gray-300 rounded-lg ${
                  isStoreDarkMode ? "bg-gray-800 text-white" : "bg-sky-50"
                }`}
              >
                <option value="">Please select a Trip Type</option>
                <option value="oneWay">ONE WAY</option>
                <option value="roundTrip">ROUND TRIP</option>
                <option value="airPort">AIRPORT</option>
              </select>
              {errors.tripType && (
                <h6 className="text-orange-700 ml-3 p-0 my-0">
                  * {errors.tripType.message}
                </h6>
              )}
              {airportOpt === "airPort" && (
                <>
                  <select
                    className={`flex items-center mt-5 justify-center p-3 border-2 max-w-[50%] border-gray-300 rounded-lg ${
                      isStoreDarkMode ? "bg-gray-800 text-white" : ""
                    }`}
                    {...register("airPortOptation", { required: "Please select an option" })}
                  >
                    <option value="">Please select type</option>
                    <option value="DropToAirport">Drop to Airport</option>
                    <option value="PickFromAirport">Pickup from Airport</option>
                  </select>
                  {errors.airPortOptation && (
                    <h6 className="text-orange-700 ml-3 p-0 my-0">
                      * {errors.airPortOptation.message}
                    </h6>
                  )}
                </>
              )}
            </div>
            <div>
              <BookNowButton label="Rent Now" />
            </div>
          </form>
        </div>
        {/* Right Section (Image) */}
        <div className="mx-1 md:flex md:w-[49%] h-auto md:h-[80vh] md:relative md:overflow-hidden">
          <img
            src={BookNowCarImg}
            alt="Book Now poster"
            className="w-full h-full object-cover shadow-md rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BookNowPageCom;
