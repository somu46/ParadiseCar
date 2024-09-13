import ContactForm from "../../Components/ContactFrom/ContactFrom";
import Office from '../../Components/Office/Office'


const ContactUs = () => {
    return (
      <>
      <div className=" mt-[10rem] min-h-screen flex justify-center font-semibold text-3xl ">
      <ContactForm className="mr- [5rem]"/>
      <Office/>
      
      </div>
    </>
    );
  };
  
  export default ContactUs;
  