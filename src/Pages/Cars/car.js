import React from 'react';
import './Cars.css';
import Xcent from '../../Assets/Xcent.png'
import Dzire from '../../Assets/Dzire.png'
import Scorpio from '../../Assets/Scorpio.png'
import Innova from '../../Assets/Innova.png'
import Traveller from '../../Assets/Travellar.png'
import Bolero from '../../Assets/Bolero.png'
const Cars = () => {
  // Sample data for cars (replace this with your actual data)
  const cars = [
    { id: 1, name: 'Hyundai Xcent', image : Xcent , description: 'Stylish and powerful', seat:'4' },
    { id: 2, name: 'Suzuki Dzire', image: Dzire, description: 'Stylish and powerful', seat:'4' },
    { id: 3, name: 'Toyota Innova', image: Innova, description: 'Stylish and powerful', seat:'7' },
    { id: 4, name: 'Mahindra Scorpio', image: Scorpio , description: 'Stylish and powerful', seat:'7' },
    { id: 5, name: 'Mahindra Bolero', image: Bolero , description: 'Stylish and powerful', seat:'10' },
    { id: 6, name: 'Force Traveller', image: Traveller , description: 'Stylish and powerful', seat:'26' },
  ];

  return (
    <div className='cars-container'>
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
