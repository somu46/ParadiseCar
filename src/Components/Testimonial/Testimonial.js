import React from 'react';
import './Testimonial.css'; // Importing the CSS file for styles

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Jessica',
      role: 'CEO, XYZ Company',
      rating: 5,
      review: 'SwiftStrategix exceeded our expectations in every way. Their attention to detail and strategic approach truly set them apart.',
      imageUrl: 'url-to-jessica-image', // Replace with actual image URL
    },
    {
      name: 'John Doe',
      role: 'Business Consultant',
      rating: 4,
      review: 'Rentax provided me with an exceptional rental experience. From the moment I made my reservation online to returning the vehicle.',
      imageUrl: 'url-to-john-image',
    },
    {
      name: 'Sarah Johnson',
      role: 'Customer',
      rating: 3,
      review: 'I’ve rented cars from various companies, but Rentax truly stands out. Not only did they offer competitive prices.',
      imageUrl: 'url-to-sarah-image',
    },
    {
      name: 'Jane Smith',
      role: 'Founder, 123 Solutions',
      rating: 5,
      review: 'I recently rented a car from Rentax for a business trip, and I couldn’t be happier with the service. From the moment I made the reservation.',
      imageUrl: 'url-to-jane-image',
    },
  ];

  return (
    <div className="testimonial-section">
      <h2 className="section-title">Words from Our Satisfied Clients</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <div className="stars">
              {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
