import React from 'react';
import './Contactform.css';
import BookNowButton from '../Button/Button';

const ContactForm = () => {
  return (
    <div className="contact-form-container m-1 w-full lg:w-1/2 p-3">
      <form className="contact-form mx-3 py-5 px-5">
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
