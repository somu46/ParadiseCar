import BookNowCom from "../../Components/BookNowComponent/BookNowCom";
import BookNow from "../BookNow/BookNow"
const Home = () => {
  return (
    <>
      <div className=" mt-[10rem] min-h-screen flex flex-col items-center p-3 my-5 ">
      
      <BookNow className="w-100"/>
      <BookNowCom/> 
      </div>
    </>
  );
};

export default Home;
