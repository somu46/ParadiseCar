import ContactForm from "../../Components/ContactFrom/ContactFrom";
import Office from "../../Components/Office/Office";
import Social from "../../Components/Social/Social";
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";
const ContactComponent = () => {
  return (
    <>
      <div className="  mt-16 w-full flex flex-col justify-center p-0 lg:px-3">
        <div className="  flex justify-center text-4xl font-bold text-sky-900 flex-wrap w-full text-center">
          <h1> GET IN TOUCH</h1>
        </div>
        <div className="  w-full lg:max-w-6xl flex flex-col lg:flex-row justify-center font-semibold text-2xl lg:text-3xl  m-0 lg:mx-auto mb-10 space-y-5 lg:space-y-0 overflow-hidden">
          <ContactForm />
          <Office />
          <FloatingWhatsAppButton/>
        </div>
          <Social/>
      </div>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      <div className="  flex flex-wrap mt-32 mx-1 p-3 lg:mt-24">
        <ContactComponent />
      </div>
    </>
  );
};

export { ContactComponent };
export default ContactUs;
