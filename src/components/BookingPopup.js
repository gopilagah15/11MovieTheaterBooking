// components/BookingPopup.js
import React from 'react';

const BookingPopup = ({ customer, onConfirm }) => {
  return (
    <div className="popup">
      <h3>Confirm Booking</h3>
      <p>Customer: {customer.name}</p>
      <p>Movie: {customer.movie}</p>
      <p>Seat: {customer.seat}</p>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

export default BookingPopup;
