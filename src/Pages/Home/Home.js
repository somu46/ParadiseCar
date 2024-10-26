import  BookNowPageCom from "../../Components/BookNowComponent/BookNowPageCom";
import Feature from "../../Components/Feature/feature";
import Faq from "../../Components/Faqs/faq";
import BookingP from "../../Components/Booking/bookingP";
import Testimonial from "../../Components/Testimonial/Testimonial";
import About from '../../Components/AboutUs/About'

const Home = () => {
  return (
    <>
      <div className="shadow-sm rounded-md mt-[6rem] min-w-full min-h-screen flex flex-col items-center p-3 my-5 ">
        <BookNowPageCom/>
        <About/>
        <Feature/>
        <Faq/>
        <BookingP/>
        <Testimonial/>
      </div>
    </>
  );
};

export default Home;
