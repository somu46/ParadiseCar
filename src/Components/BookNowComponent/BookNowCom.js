import React, { useState } from "react";
import BookNowButton from "../Button/Button";

const BookNowCom = () => {
  const [selectedTab, setSelectedTab] = useState("oneWay");

  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-8 shadow-lg w-3/4 mx-auto border-2">
      {/* Tabs */}
      <div className="flex space-x-8 mb-6">
        <span
          className={`font-bold hover:text-yellow-300 cursor-pointer pb-2 transition ease-in duration-300 ${
            selectedTab === "oneWay"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "hover:underline"
          }`}
          onClick={() => setSelectedTab("oneWay")}
        >
          ONE WAY
        </span>
        <span
          className={`font-bold hover:text-yellow-300 cursor-pointer pb-2 transition ease-in duration-300 ${
            selectedTab === "roundTrip"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "hover:underline"
          }`}
          onClick={() => setSelectedTab("roundTrip")}
        >
          ROUND TRIP
        </span>
        <span
          className={`font-bold cursor-pointer hover:text-yellow-300 pb-2 transition ease-in duration-300 ${
            selectedTab === "airport"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "hover:underline"
          }`}
          onClick={() => setSelectedTab("airport")}
        >
          AIRPORT
        </span>
      </div>

      {/* oneWay- Form */}

      {selectedTab === "oneWay" && (
       <div className="flex flex-wrap ustify-between items-center min-w-full px-0  mx-0 overflow-hidden">
       <from className="flex flex-wrap justify-between  min-w-full  mx-0 px-0 ">
         <div className=" flex flex-wrap flex-col mx-0 md:w-1/4 ">
           <label className="text-start text-base font-bold">PICK UP</label>
           <input
             type="text"
             placeholder="PICKUP"
             className="  max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
           />
         </div>
         <div className=" flex flex-wrap flex-col mx-0  md:w-1/4 ">
           <label className="text-start text-base font-bold">DROP OFF</label>
           <input
             type="text"
             placeholder="DROP OFF"
             className=" max-w-full p-3  border-2 border-b-black border-gray-300 rounded-lg "
           />
         </div>
         <div className=" flex flex-wrap flex-col  mx-0 md:w-1/4   ">
           <label className="text-start text-base font-bold">
             JOURNEY DATE
           </label>
           <input
             type="date"
             placeholder="JOURNEY DATE"
             className=" max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
           />
         </div>
        
         <div className=" flex flex-wrap flex-col mx-0 md:w-1/5 ">
           <label className="text-start text-base font-bold">
             CONTACT NO
           </label>
           <input
             type="number"
             placeholder="CONTACT NO"
             className=" max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
           />
         </div>
         <div className="flex flex-wrap justify-center  min-w-full">
           <BookNowButton />
         </div>
       </from>
     </div>
      )}

      {/* roundTrip- Form */}

      {selectedTab === "roundTrip" && (
        <div className="flex flex-wrap ustify-between items-center min-w-full px-0  mx-0 overflow-hidden">
          <from className="flex flex-wrap justify-between  min-w-full  mx-0 px-0 ">
            <div className=" flex flex-wrap flex-col mx-0 md:w-1/5 ">
              <label className="text-start text-base font-bold">PICK UP</label>
              <input
                type="text"
                placeholder="PICKUP"
                className="  max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
              />
            </div>
            <div className=" flex flex-wrap flex-col mx-0  md:w-1/5 ">
              <label className="text-start text-base font-bold">DROP OFF</label>
              <input
                type="text"
                placeholder="DROP OFF"
                className=" max-w-full p-3  border-2 border-b-black border-gray-300 rounded-lg "
              />
            </div>
            <div className=" flex flex-wrap flex-col  mx-0 md:w-1/5   ">
              <label className="text-start text-base font-bold">
                JOURNEY DATE
              </label>
              <input
                type="date"
                placeholder="JOURNEY DATE"
                className=" max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
              />
            </div>
            <div className=" flex flex-wrap flex-col  mx-0 md:w-1/5   ">
              <label className="text-start text-base font-bold">
                RETURN DATE
              </label>
              <input
                type="date"
                placeholder="RETURN DATE"
                className=" max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
              />
            </div>
            <div className=" flex flex-wrap flex-col mx-0 md:w-1/6 ">
              <label className="text-start text-base font-bold">
                CONTACT NO
              </label>
              <input
                type="number"
                placeholder="CONTACT NO"
                className=" max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-wrap justify-center  min-w-full">
              <BookNowButton />
            </div>
          </from>
        </div>
      )}

      {/* roundTrip- Form */}

      {selectedTab === "airport" && (
        <div className="flex flex-wrap ustify-between items-center min-w-full px-0  mx-0 overflow-hidden">
          <from className="flex flex-wrap justify-between  min-w-full  mx-0 px-0 ">
            <div className=" flex flex-wrap flex-col  mx-0 md:w-1/5   ">

              <label className="text-start text-base font-bold">TRIP</label>
              <select className="  max-w-full border-2 border-b-black border-gray-300 rounded-lg p-3">
                <option value="DropToAirport">Drop to Airport</option>
                <option value="PickFromAirport">Pickup from Airport</option>
              </select>
              
            </div>

            <div className=" flex flex-wrap flex-col mx-0 md:w-1/5 ">
              <label className="text-start text-base font-bold">PICK UP</label>
              <input
                type="text"
                placeholder="PICKUP"
                className="  max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
              />
            </div>
            <div className=" flex flex-wrap flex-col mx-0  md:w-1/5 ">
              <label className="text-start text-base font-bold">DROP OFF</label>
              <input
                type="text"
                placeholder="DROP OFF"
                className=" max-w-full p-3  border-2 border-b-black border-gray-300 rounded-lg "
              />
            </div>
            <div className=" flex flex-wrap flex-col  mx-0 md:w-1/5   ">
              <label className="text-start text-base font-bold">
                JOURNEY DATE
              </label>
              <input
                type="date"
                placeholder="JOURNEY DATE"
                className=" max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
              />
            </div>

            <div className=" flex flex-wrap flex-col mx-0 md:w-1/6 ">
              <label className="text-start text-base font-bold">
                CONTACT NO
              </label>
              <input
                type="number"
                placeholder="CONTACT NO"
                className=" max-w-full  p-3  border-2 border-b-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-wrap justify-center  min-w-full">
              <BookNowButton />
            </div>
          </from>
        </div>
      )}
    </div>
  );
};

export default BookNowCom;
