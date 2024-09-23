import { FaTaxi } from 'react-icons/fa';


const BookNowButton = ({ onClick, label = "Book Now" }) => {
  
    return (
      <button
        onClick={onClick}
        type="submit"
        className=" m-3  bg-orange-400 shadow-lg border-2 border-white-600 p-[4px] rounded-lg font-semibold text-inherit hover:border-green-300 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider"
      >
       
        <p className=" flex flex-row items-center py-2 px-2 font-bold">
        {label==="Book Now"  && 
        <FaTaxi />
        }
          {label.toUpperCase()} &rarr; 
        </p>
      </button>
    );
  };
  
  export default BookNowButton;
  