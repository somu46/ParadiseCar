import BookNowCom from "../../Components/BookNowComponent/BookNowCom";
import BookNow from "../BookNow/BookNow";
const Home = () => {
  return (
    <>
      <div className="border-2  shadow-sm rounded-md mt-[6rem] min-w-full min-h-screen flex flex-col items-center p-3 my-5 ">
        <BookNow />
        <BookNowCom />
      </div>
    </>
  );
};

export default Home;
