// components/Receipt.js
import React from 'react';

const Receipt = ({ customer }) => {
  if (!customer) return null;

  const price = customer.seat === 'Front' ? 10 : customer.seat === 'Middle' ? 15 : 20;

  return (
    <div className="receipt">
      <h3>Receipt</h3>
      <p>Customer: {customer.name}</p>
      <p>Movie: {customer.movie}</p>
      <p>Seat: {customer.seat}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Receipt;
