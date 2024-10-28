import React from 'react'
// import './bookNow.css'
import BookNow from '../../Components/BookNow/BookNowPageCom.js';
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";
const bookNow = () => {
  return (
    <div>
        <div className="mt-[6rem]">
            <BookNow/>
            <FloatingWhatsAppButton/>
        </div>

    </div>
  )
}

export default bookNow