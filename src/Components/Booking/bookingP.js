import React from 'react';
import './bookingP.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCar, faIdCard, faCreditCard, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BookingP = () => {
  return (
    <div className="booking-container">
      <h2>How to Book a Ride</h2>
      <div className="process-row">
        <div className="process">
          <div className="circle green">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <div className="step-info">
            <p>Select City & Travel Dates</p>
          </div>
        </div>
        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        <div className="process">
          <div className="circle blue">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <div className="step-info">
            <p>Choose Car & Delivery Mode</p>
          </div>
        </div>
        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        <div className="process">
          <div className="circle pink">
            <FontAwesomeIcon icon={faIdCard} />
          </div>
          <div className="step-info">
            <p>Verify Yourself</p>
          </div>
        </div>
        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        <div className="process">
          <div className="circle yellow">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <div className="step-info">
            <p>Make Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingP;
