import React from 'react'
import './Contactform.css'
import BookNowButton from '../Button/Button'
const ContactFrom = () => {
  return (
    <div className=' m-1  w-1/2 p-3'>
        <form className="  mx-3 py-5  px-5 contact-form ">
        <label className='text-center dark:text-sky-900 text-inherit'>DO YOU HAVE ANY QUESTIONS?</label>
        <input  type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter Your Mobile Number" />
        <input type="email" placeholder="Enter Your Email Address" />
        <textarea placeholder="Message"></textarea>
       
        <div className='flex flex-wrap justify-center  font-semibold text-base  '>
        
         <BookNowButton label='submit'/>
      
        </div>
        {/* <button type="submit">SUBMIT</button> */}
      </form>
    </div>
  )
}

export default ContactFrom