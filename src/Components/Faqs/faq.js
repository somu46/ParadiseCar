import React from 'react';
import './faq.css';
import Expand from '../expand/expand';

const Faq = () => {
  const faqs = [
    {
      question: 'What Is MyChoize Car Rental Service?',
      answer: 'MyChoize car rental service provides the best journey to your destination.',
    },
    {
      question: 'Is MyChoize Available In My City?',
      answer: 'Yes, MyChoize is available in multiple cities across the country. Check our website for your location.',
    },
    {
      question: 'What Type Of Vehicles/Cars Does MyChoize Offer?',
      answer: 'We offer a wide range of vehicles, including SUVs, sedans, and hatchbacks.',
    },
    {
      question: 'How Much Does It Cost To Rent A Car At MyChoize?',
      answer: 'The cost varies based on the car type and duration. Please visit our pricing page for more details.',
    },
    {
      question: 'What Are The Advantages Of Availing Cars On Rent At MyChoize?',
      answer: 'We offer competitive pricing, well-maintained vehicles, and excellent customer service.',
    },
  ];

  return (
    <div className='faqs'>
      <div className="faq-left">
        <h1>FAQ's</h1>
        <h3>Frequently Asked Questions.</h3>
        <button>View All</button>
      </div>
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <Expand key={index} question={faq.question}>
            <p>{faq.answer}</p>
          </Expand>
        ))}
      </div>
    </div>
  );
};

export default Faq;
