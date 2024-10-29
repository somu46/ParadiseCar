import React from 'react';
import './Pricing.css';
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";
const Pricing = () => {
  // Sample data for vehicles and rates
  const vehicles = [
    { id: 1, type: 'Hyundai Xcent', rate1: '₹500', rate2: '₹1000', rate3: '₹1500' , rate4: '₹15' },
    { id: 2, type: 'Suzuki Dzire', rate1: '₹600', rate2: '₹1100', rate3: '₹1600', rate4: '₹15'},
    { id: 3, type: 'Toyota Innova', rate1: '₹800', rate2: '₹1500', rate3: '₹2000', rate4: '₹15' },
    { id: 4, type: 'Mahindra Scorpio', rate1: '₹900', rate2: '₹1600', rate3: '₹2100', rate4: '₹15' },
    { id: 4, type: 'Suzuki Ertiga', rate1: '₹900', rate2: '₹1600', rate3: '₹2100', rate4: '₹15' },
    { id: 4, type: 'Toyota Innova Crysta', rate1: '₹900', rate2: '₹1600', rate3: '₹2100', rate4: '₹15' },
    { id: 4, type: 'Mahindra XUV 500', rate1: '₹900', rate2: '₹1600', rate3: '₹2100', rate4: '₹15' },
    { id: 5, type: 'Force Traveller', rate1: '₹1500', rate2: '₹2500', rate3: '₹3500', rate4: '₹15' },
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
