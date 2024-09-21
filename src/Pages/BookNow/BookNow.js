import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BookNowButton from "../../Components/Button/Button";
import BookNowCarImg from "./../../Assets/BookNowCarImg.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookNowPageCom = () => {
  const [selectedPicupDate, setSelectedpicupDate] = useState(null);
  const [selectedDropoffDate, setSelectedDropoffDate] = useState(null);
  const [airportOpt, setAirportOpt] = useState(" ");

  // for srom data submmistion

  const [err, setErr] = useState("");
  const {
    register,
    setValue, //manualy update value
    handleSubmit,
    formState: { errors },
  } = useForm();


  // const handleSelectChange = (value) => {
  //   setAirportOpt(value);
  // };
  const FromData = (data) => {
    setErr(""); // at frist we counter error as empty

    try {
      console.log(data);
      console.log("seledPicupDate",selectedPicupDate)
      console.log("DropoffDate",selectedDropoffDate)
      console.log("airportOpt",airportOpt)
      
       
    } catch (error) {
      setErr(error);
      console.log(err);
      
    }
    // alert("selectedDropoffDate : " + typeof selectedDropoffDate);
  };

  return (
    <>
      <div className="mt-[0.25rem] w-full lg:w-[80%] mb-[15rem] lg:mb-3 lg:h-auto flex justify-center items-center ">
        <div className="flex flex-wrap flex-col lg:flex-row justify-between bg-sky-100 border-2 shadow-lg rounded-md w-[100%] h-full lg:min-h-[70%] p-1 lg:overflow-hidden">
          {/* Left Section (Form & Text) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start p-5">
            <div className="mb-6">
              <p className="text-3xl font-bold text-start text-orange-600 mb-2">
                Booking for Outstation Trip
              </p>
              <p className="text-lg font-semibold text-start text-slate-900">
                Estimated Fare ₹ 11.00 per/km
              </p>
            </div>
                  {/* Form */}



            <form
              className="flex flex-wrap flex-col gap-4"
              onSubmit={handleSubmit(FromData)}
            >
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 border-2 border-gray-300 rounded-lg w-1/2"
                  {...register("fullName",{
                    required:true
                  })}

                />
               {errors.fullName && <p className="absolute font-semibold text-lg  text-orange-600 ml-3 mt-[2.7rem] p-1 "> *Name is required.</p>}
                <input
                  type="text"
                  placeholder="10 Digit Mobile No"
                  className="p-3 border-2 border-gray-300 rounded-lg w-1/2"
                  {...register("MobileNum",{
                    required:true,
                  })}
                />
              </div>
              <input
                type="text"
                placeholder="Enter your Destination"
                className="p-3 border-2 border-gray-300 rounded-lg"
                {...register("destinationLocation",{
                  required:true,
                })}
              />
              <input
                type="text"
                placeholder="Pick up Address"
                className="p-3 border-2 border-gray-300 rounded-lg"
                {
                  ...register("PicUpLocation",{
                    required:true,
                  })
                }
              />

              <div className="flex lg:flex-nowrap flex-wrap  justify-between gap-4">
                <div className=" flex flex-wrap flex-col w-full">
                  <label className="px-3 text-start">Pickup Date</label>
                  <DatePicker
                    selected={selectedPicupDate}
                    onChange={(date) =>
                       {
                        setSelectedpicupDate(date);
                        setValue("PickDateTime", date);
                      }
                      }
                    showTimeSelect
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="p-3 border-2 border-gray-300 rounded-lg "
                    placeholderText="Select Pickup Date and Time"
                    // {
                    //   ...register("PickDatetime",{  //this is not support of this object
                    //     required:true,
                    //   })
                    // }
                  />
                
                </div>
                <div className=" flex flex-wrap flex-col w-full">
                  <label className="px-3 text-start">DropOff Date</label>

                  <DatePicker
                    selected={selectedDropoffDate}
                    onChange={(date) =>{ 
                      setSelectedDropoffDate(date);
                      setValue("dropOffDateTime",date)
                      
                    }}
                    showTimeSelect
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    placeholderText="Select Drop Date "
                    // {
                    //   ...register("dropoffDatetime",{
                    //     required:true,
                    //   })
                    // }
                  />
                </div>
              </div>


              <div className="flex flex-wrap flex-col">
                <label className="text-start">Trip Type</label>

                <select
                  onChange={(e) => {
                    const tripDate=e.target.value;
                    setAirportOpt(tripDate);
                    setValue("tripype",tripDate)
                  }
                   }
                  className="p-3 border-2 border-gray-300 rounded-lg"
                // {
                //   ...register("tripype",{
                //     required:true             //rgister and ongange event can't use in same time
                //   }
                //   )
                // }
                >
                  <option>Please select a Trip</option>
                  <option value="oneWay">ONE WAY</option>
                  <option value="roundTrip">ROUND TRIP</option>
                  <option value="airPort">AIRPORT</option>
                </select>

                {airportOpt === "airPort" && (
                  <select className=" flex items-center mt-5 justify-center p-3 border-2 max-w-[50%] border-gray-300 rounded-lg"
                  {
                    ...register("airPortOptation",{
                      required:true,
                    })
                  }
                  >
                    <option>Please select type</option>
                    <option value="DropToAirport">Drop to Airport</option>
                    <option value="PickFromAirport">Pickup from Airport</option>
                  </select>
                )}
              </div>

              <div>
                <BookNowButton label="Rent Now " />
              </div>
            </form>
          </div>

          {/* Right Section (Image) */}
          <div className=" md:flex md:w-1/2  right-0 top-0 md:overflow-hidden">
            <img
              src={BookNowCarImg}
              alt="Book Now poster"
              className="min-w-full lg:min-h-full object-cover shadow-md rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const BookNow = () => {
  return (
    <>
      <div className="border-2  shadow-sm rounded-md mt-[6rem] min-w-full min-h-screen flex flex-col items-center p-3 my-5">
        <BookNowPageCom/>
      </div>
    </>
  );
};

export { BookNowPageCom };

export default BookNow;
