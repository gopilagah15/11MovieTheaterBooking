// components/CustomerForm.js
import React, { useState } from 'react';

const CustomerForm = ({ onAddCustomer }) => {
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [seat, setSeat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCustomer({ id: Date.now(), name, movie, seat });
    setName('');
    setMovie('');
    setSeat('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book a Movie Ticket</h3>
      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={movie} onChange={(e) => setMovie(e.target.value)}>
        <option value="">Select a Movie</option>
        <option value="Movie 1">Movie 1</option>
        <option value="Movie 2">Movie 2</option>
      </select>
      <select value={seat} onChange={(e) => setSeat(e.target.value)}>
        <option value="">Select Seat</option>
        <option value="Front">Front</option>
        <option value="Middle">Middle</option>
        <option value="Back">Back</option>
      </select>
      <button type="submit">Book</button>
    </form>
  );
};

export default CustomerForm;
