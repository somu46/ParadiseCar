import React from 'react';
import './Pricing.css';
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";
const Pricing = () => {
  // Sample data for vehicles and rates
  const vehicles = [
    { id: 1, type: 'Hyundai Xcent', rate1: '₹1200', rate2: '₹2000', rate3: '₹2500' , rate4: '₹16' },
    { id: 2, type: 'Suzuki Dzire', rate1: '₹1300', rate2: '₹2200', rate3: '₹2600', rate4: '₹17'},
    { id: 3, type: 'Toyota Innova', rate1: '₹1000', rate2: '₹2200', rate3: '₹3000', rate4: '₹25' },
    { id: 4, type: 'Mahindra Scorpio', rate1: '₹1000', rate2: '₹2200', rate3: '₹3000', rate4: '₹25' },
    { id: 5, type: 'Suzuki Ertiga', rate1: '₹1000', rate2: '₹1800', rate3: '₹2300', rate4: '₹20' },
    { id: 6, type: 'Toyota Innova Crysta', rate1: '₹1400', rate2: '₹2200', rate3: '₹3200', rate4: '₹27' },
    { id: 7, type: 'Mahindra XUV 500', rate1: '₹1400', rate2: '₹2200', rate3: '₹3200', rate4: '₹27' },
    // { id: 8, type: 'Force Traveller', rate1: '₹1500', rate2: '₹2500', rate3: '₹3500', rate4: '₹15' },
  ];

  return (
    <div className='pricing-container'>
      <FloatingWhatsAppButton/>
      <h1>Vehicle Pricing</h1>
      <table className='pricing-table'>
        <thead>
          <tr>
            <th>Vehicle Model</th>
            <th>0-50 kms</th>
            <th>50-100 kms</th>
            <th>100+ kms</th>
            <th>250+ kms</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.type}</td>
              <td>{vehicle.rate1}</td>
              <td>{vehicle.rate2}</td>
              <td>{vehicle.rate3}</td>
              <td>{vehicle.rate4}/km</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
