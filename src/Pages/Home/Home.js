import  { BookNowPageCom } from "../BookNow/BookNow";
import Feature from "../../Components/Feature/feature";
import Expand from "../../Components/expand/expand";
const Home = () => {
  return (
    <>
      <div className="border-2  shadow-sm rounded-md mt-[6rem] min-w-full min-h-screen flex flex-col items-center p-3 my-5 ">
        <BookNowPageCom/>
        <Feature/>
        <Expand/>
      </div>
    </>
  );
};

export default Home;
