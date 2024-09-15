import React from 'react'

const Office = () => {
  return (
    <div className=' lg:w-1/2 mx-0 lg:m-5 h-[80%] flex   w-full  pt-10 overflow-hidden' >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13329.777848284057!2d88.46299531861573!3d22.63622114887646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f77bdfa1d47%3A0x6f9670a752dda326!2sParadise%20Car%20Rental!5e1!3m2!1sen!2sin!4v1726224121573!5m2!1sen!2sin" 
        title='office'
        width="630" 
        height="380" 
        // style="border:0" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        className='border-2 border-gray-400 rounded-lg shadow-md transition-all duration-300 ease-in-out  hover:scale-95'>
        </iframe>
    </div>
  )
}

export default Office