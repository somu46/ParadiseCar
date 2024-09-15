import React from 'react';
import './Contactform.css';
import BookNowButton from '../Button/Button';

const ContactForm = () => {
  return (
    <div className=" contact-form-container m-0 lg:m-1 w-full lg:w-1/2 p-0 lg:p-3">
      <form className="  contact-form mx-0 px-0 lg:mx-3 py-5 lg:px-5">
        <label className="text-center dark:text-sky-900 text-inherit">
          DO YOU HAVE ANY QUESTIONS?
        </label>
        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter Your Mobile Number" />
        <input type="email" placeholder="Enter Your Email Address" />
        <textarea placeholder="Message"></textarea>

        <div className="flex justify-center font-semibold text-base mt-4">
          <BookNowButton label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
