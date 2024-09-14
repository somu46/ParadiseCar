import ContactForm from "../../Components/ContactFrom/ContactFrom";
import Office from "../../Components/Office/Office";

const ContactComponent = () => {
  return (
    <>
      <div className="mt-16 w-full flex flex-col justify-center px-3">
        <div className="flex justify-center text-4xl font-bold text-sky-900 flex-wrap w-full text-center">
          <p> Get in touch</p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center font-semibold text-2xl lg:text-3xl mx-5 lg:mx-10 mb-10 space-y-5 lg:space-y-0 lg:space-x-5">
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
      <div className="flex flex-wrap mt-32 lg:mt-24">
        <ContactComponent />
      </div>
    </>
  );
};

export { ContactComponent };
export default ContactUs;
