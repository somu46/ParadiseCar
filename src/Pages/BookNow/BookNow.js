import React, { useState } from "react";
import BookNowButton from "../../Components/Button/Button";
import BookNowCarImg from "./../../Assets/BookNowCarImg.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const BookNowPageCom=()=>{
  const [selectedPicupDate, setSelectedpicupDate] = useState(null);
  const [selectedDropoffDate, setSelectedDropoffDate] = useState(null);
  const [airportOpt, setAirportOpt] = useState("");

  
  const handleSelectChange = (value) => {
    setAirportOpt(value);
  };
  const handelSubmit = () => {
    alert("Book Now open .....");
  };

  return (
    <>
      <div className="mt-[0.25rem] w-full lg:w-[80%] mb-[15rem] lg:mb-3 lg:h-auto flex justify-center items-center ">
        <div className="flex flex-wrap flex-col lg:flex-row justify-between bg-sky-100 border-2 shadow-lg rounded-md w-[100%] h-full lg:min-h-[70%] p-1 lg:overflow-hidden">
          {/* Left Section (Form & Text) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start p-5">
            <div className="mb-6">
              <p className="text-3xl font-bold text-orange-600 mb-2">
                Booking for Outstation Trip
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Estimated Fare ₹ 11.00 per/km
              </p>
            </div>
            {/* Form */}
            <form className="flex flex-wrap flex-col gap-4">
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 border-2 border-gray-300 rounded-lg w-1/2"
                />
                <input
                  type="text"
                  placeholder="10 Digit Mobile No"
                  className="p-3 border-2 border-gray-300 rounded-lg w-1/2"
                />
              </div>
              <input
                type="text"
                placeholder="Enter your Destination"
                className="p-3 border-2 border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Pick up Address"
                className="p-3 border-2 border-gray-300 rounded-lg"
              />

              <div className="flex lg:flex-nowrap flex-wrap  justify-between gap-4">
                <div className=" flex flex-wrap flex-col w-full">
                  <label className="px-3 text-start">Pickup Date</label>
                  <DatePicker
                    selected={selectedPicupDate}
                    onChange={(date) => setSelectedpicupDate(date)}
                    showTimeSelect
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="p-3 border-2 border-gray-300 rounded-lg "
                    placeholderText="Select Pickup Date and Time"
                  />
                  {/* <input
                  type="datetime-local"
                  placeholder="Pickup Date"
                  className="p-3 border-2 border-gray-300 rounded-lg "
                /> */}
                </div>
                <div className=" flex flex-wrap flex-col w-full">
                  <label className="px-3 text-start">DropOff Date</label>

                  <DatePicker
                    selected={selectedDropoffDate}
                    onChange={(date) => setSelectedDropoffDate(date)}
                    showTimeSelect
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    placeholderText="Select Drop Date "
                  />
                </div>
              </div>

              <div className="flex flex-wrap flex-col">
                <label className="text-start">Trip Type</label>

                <select
                  onChange={(e) => handleSelectChange(e.target.value)}
                  className="p-3 border-2 border-gray-300 rounded-lg"
                >
                  <option>Please select a Trip</option>
                  <option value="oneWay">ONE WAY</option>
                  <option value="roundTrip">ROUND TRIP</option>
                  <option value="airPort">AIRPORT</option>
                </select>

                {airportOpt === "airPort" && (
                  <select className=" flex items-center mt-5 justify-center p-3 border-2 max-w-[50%] border-gray-300 rounded-lg">
                    <option>Please select type</option>
                    <option value="DropToAirport">Drop to Airport</option>
                    <option value="PickFromAirport">Pickup from Airport</option>
                  </select>
                )}
              </div>

              <div>
                <BookNowButton onClick={handelSubmit} label="Rent Now " />
              </div>
            </form>
          </div>

          {/* Right Section (Image) */}
          <div className=" md:flex md:w-1/2  right-0 top-0 md:overflow-hidden">
            <img
              src={BookNowCarImg}
              alt="Book Now Car"
              className="min-w-full lg:min-h-full object-cover shadow-md rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}


const BookNow = () => {
  
return(
  <>
  <div className="border-2  shadow-sm rounded-md mt-[6rem] min-w-full min-h-screen flex flex-col items-center p-3 my-5">
  <BookNowPageCom/>
  </div>
  
  </>
);
  
};

export {BookNowPageCom};

export default BookNow;
