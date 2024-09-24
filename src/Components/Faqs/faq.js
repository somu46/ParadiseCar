import React from 'react';
import './faq.css'
import Expand from '../expand/expand';

const Faq = () => {
  return (
    <div className='faqs'>
      <div className="faq-left">
        <h1>FAQs</h1>
        <h3>Frequently Asked Questions</h3>
        <button> View All</button>
      </div>
      <div className="faq-right">
        <div className="faq-item">
          <p>What does Paradise Car Rental service provide?</p>
          <Expand>  <p>Paradise car rental service provides the best journey to your destination</p> </Expand>
        </div>
        <div className="faq-item">
          <p>What does Paradise Car Rental service provide?</p>
          <Expand>  <p>Paradise car rental service provides the best journey to your destination</p> </Expand>
        </div>
        <div className="faq-item">
          <p>What does Paradise Car Rental service provide?</p>
          <Expand>  <p>Paradise car rental service provides the best journey to your destination</p> </Expand>
        </div>
        <div className="faq-item">
          <p>What does Paradise Car Rental service provide?</p>
          <Expand>  <p>Paradise car rental service provides the best journey to your destination</p> </Expand>
        </div>
      </div>
    </div>
  );
}

export default Faq;
