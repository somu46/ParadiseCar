import React from 'react'
import './Contactform.css'
const ContactFrom = () => {
  return (
    <div>
        <form className="contact-form">
        <label>DO YOU HAVE ANY QUESTIONS?</label>
        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter Your Mobile Number" />
        <input type="email" placeholder="Enter Your Email Address" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default ContactFrom