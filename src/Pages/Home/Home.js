import BookNowCom from "../../Components/BookNowComponent/BookNowCom";

const Home = () => {
  return (
    <>
      <div className=" mt-[10rem] min-h-screen flex flex-col items-center p-3 my-5 ">
      <p className=" my-5 cursor-pointer transition ease-in duration-300  font-semibold text-3xl hover:scale-110">This is Home Page !</p>
      <BookNowCom/> 
      </div>
    </>
  );
};

export default Home;
