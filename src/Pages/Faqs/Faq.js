import React from 'react'
import './faq.css'
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";
import Faqs from '../../Components/Faqs/faq'
const Faq = () => {
  return (
    <div className='faq-container'>
        <div className="faq">
            <Faqs/>
            <FloatingWhatsAppButton/>
        </div>
    </div>
  )
}

export default Faq