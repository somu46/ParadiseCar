import React from 'react';
import './Cars.css';
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";
import Xcent from '../../Assets/Xcent.png'
import Dzire from '../../Assets/Dzire.png'
import Scorpio from '../../Assets/Scorpio.png'
import Innova from '../../Assets/Innova.png'
import Traveller from '../../Assets/Travellar.png'
import Bolero from '../../Assets/Bolero.png'
import Ertiga from '../../Assets/Ertiga.png'
import Crysta from '../../Assets/Crysta.png'
import XUV500 from '../../Assets/XUV500.png'
const Cars = () => {
  // Sample data for cars (replace this with your actual data)
  const cars = [
    { id: 1, name: 'Hyundai Xcent', image : Xcent , description: 'Stylish and powerful', seat:'4' },
    { id: 2, name: 'Suzuki Dzire', image: Dzire, description: 'Stylish and powerful', seat:'4' },
    { id: 3, name: 'Toyota Innova', image: Innova, description: 'Stylish and powerful', seat:'7' },
    { id: 4, name: 'Mahindra Scorpio', image: Scorpio , description: 'Stylish and powerful', seat:'7' },
    { id: 5, name: 'Mahindra Bolero', image: Bolero , description: 'Stylish and powerful', seat:'10' },
    { id: 6, name: 'Suzuki Ertiga', image: Ertiga , description: 'Stylish and powerful', seat:'7' },
    { id: 7, name: 'Toyota Innova Crysta', image: Crysta , description: 'Stylish and powerful', seat:'7' },
    { id: 8, name: 'Mahindra XUV', image: XUV500 , description: 'Stylish and powerful', seat:'7' },
    { id: 9, name: 'Force Traveller', image: Traveller , description: 'Stylish and powerful', seat:'26' },
  ];

  return (
    <div className='cars-container'>
      <FloatingWhatsAppButton/>
      <h1>Available Cars for Rent</h1>
      <div className='cars-grid'>
        {cars.map((car) => (
          <div key={car.id} className='car-card'>
            <img src={car.image} alt={car.name} className='car-image' />
            <h2 className='car-name'>{car.name}</h2>
            <p className='car-description'>{car.description}</p>
            <p className='Seat'>{car.seat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
