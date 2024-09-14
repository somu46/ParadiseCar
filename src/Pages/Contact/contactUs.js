import ContactForm from "../../Components/ContactFrom/ContactFrom";
import Office from "../../Components/Office/Office";

const ContactComponent = () => {
  return (
    <>
      <div className=" mt-[4rem]  w-full max-h-full flex flex-col justify-center px-3">
        <div className="flex  justify-center text-4xl font-bold text-sky-900 flex-wrap w-full  ">
          <p> Get in touch</p>
        </div>
        <div className="  min-h-auto  w-[90%] flex justify-center font-semibold text-3xl mx-10 mb-10">
          <ContactForm />
          <Office />
        </div>
      </div>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-wrap mt-[8rem]" >
      <ContactComponent/>
      </div>
    </>
  );
};

export {ContactComponent};
export default ContactUs;

{
  /* import Office from '../../Components/Office/Office'
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";

const ContactUs = () => {
    return (
      <>
      <div className=" mt-[10rem] min-h-screen flex justify-center font-semibold text-3xl ">
      <div className="flex  justify-center text-4xl font-bold text-sky-900 flex-wrap w-full  ">
           <p> Get in touch</p>
      </div>
      <ContactForm className="mr-[5rem]"/>
      <Office/>
      <FiFacebook/>
      <FiInstagram/>
      <SiGooglemaps/> */
}
