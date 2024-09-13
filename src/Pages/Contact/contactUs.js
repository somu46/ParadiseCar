import ContactForm from "../../Components/ContactFrom/ContactFrom";
import Office from "../../Components/Office/Office";

const ContactUs = () => {
  return (
    <>
      <div className=" mt-[8rem]  w-full max-h-full flex flex-col justify-center px-3">
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

export default ContactUs;
