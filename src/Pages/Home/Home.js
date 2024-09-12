
import BookNowCom from "../../Components/BookNowComponent/BookNowCom"


const Home = () => {

   
     
   
  return (
    <>
      <div className=" mt-[10rem] min-h-screen flex flex-col items-center   ">
      <p className="py-5 my-3 cursor-pointer transition ease-in duration-300 font-semibold hover:scale-110 text-3xl" >This is Home Page !</p>
      <div>
      <BookNowCom  />
        </div> 
      </div>
    </>
  );
};

export default Home;
