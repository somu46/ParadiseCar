import BookNowButton from "../../Components/Button/Button";
import BookNowCarImg from "./../../Assets/BookNowCarImg.svg";

const BookNow = () => {

const handelSubmit=()=>{
  alert("Book Now open .....")
}

  return (
    <>
      <div className="mt-[6rem] flex justify-center items-center h-screen">
        <div className="flex flex-wrap justify-between bg-sky-100 border-2 shadow-lg rounded-md w-[80%] min-h-[70%] p-1 overflow-hidden" >
          {/* Left Section (Form & Text) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start p-5">
            <div className="mb-6">
              <p className="text-3xl font-bold text-orange-600 mb-2">Booking for Outstation Trip</p>
              <p className="text-lg font-semibold text-slate-900">Estimated Fare ₹ 11.00 per/km</p>
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
             
              
              <div className="flex justify-between gap-4">
               
               <div className=" flex flex-wrap flex-col w-full">
                <label>
                Pickup Date
                </label>
                <input
                  type="date"
                  placeholder="Pickup Date"
                  className="p-3 border-2 border-gray-300 rounded-lg "
                />
                 </div>
                 <div className=" flex flex-wrap flex-col w-full">
                <label>
                Drop Date
                </label>
                <input
                  type="date"
                  placeholder="Dropup Date"
                  className="p-3 border-2 border-gray-300 rounded-lg "
                />
                </div>
              </div>
             <div>
              <BookNowButton onClick={handelSubmit} label="Rent Now " />
             </div>
            </form>
          </div>

          {/* Right Section (Image) */}
          <div className="hidden md:flex md:w-1/2  right-0 top-0 overflow-hidden">
            <img
              src={BookNowCarImg}
              alt="Book Now Car"
              className="min-w-full min-h-full object-cover shadow-md rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
