import ContactForm from "../../Components/ContactFrom/ContactFrom";
import Office from '../../Components/Office/Office'
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";

const ContactUs = () => {
    return (
      <>
      <div className=" mt-[10rem] min-h-screen flex justify-center font-semibold text-3xl ">
      <ContactForm className="mr- [5rem]"/>
      <Office/>
      <FiFacebook/>
      <FiInstagram/>
      <SiGooglemaps/>
      </div>
    </>
    );
  };
  
  export default ContactUs;
  