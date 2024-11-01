import BookNow from "../../Components/BookNow/BookNowPageCom";
import Feature from "../../Components/Feature/feature";
import Faq from "../../Components/Faqs/faq";
import BookingP from "../../Components/Booking/bookingP";
import Testimonial from "../../Components/Testimonial/Testimonial";
import About from '../../Components/AboutUs/About'
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";
import useStore from "../../Store/store";
const Home = () => {
  const {isStoreDarkMode}=useStore();
  console.log("isStoreDarkMood",isStoreDarkMode);
  return (
    <>
      <div className="shadow-sm rounded-md lg:mt-[6rem] mt-[6rem] min-w-full min-h-screen flex flex-col items-center lg:p-3 lg:my-5">
        <BookNow/>
        <About/>
        <Feature/>
        <Faq/>
        <BookingP/>
        <Testimonial/>
        <FloatingWhatsAppButton/>
      </div>
    </>

  );
};

export default Home;
