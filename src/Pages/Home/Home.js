// import BookNowCom from "../../Components/BookNowComponent/BookNowCom";
import  { BookNowPageCom } from "../BookNow/BookNow";
import Feature from "../../Components/Feature/feature";
const Home = () => {
  return (
    <>
      <div className="border-2  shadow-sm rounded-md mt-[6rem] min-w-full min-h-screen flex flex-col items-center p-3 my-5 ">
        <BookNowPageCom/>
        <Feature/>
        {/* <BookNowCom /> */}
      </div>
    </>
  );
};

export default Home;
