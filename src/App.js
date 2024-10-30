// App.js
import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import BookingPopup from './components/BookingPopup';
import Receipt from './components/Receipt';
import Report from './components/Report';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddCustomer = (customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
    setSelectedCustomer(customer);
    setShowPopup(true);
  };

  const handleConfirmBooking = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h2>Movie Theater Booking System</h2>
      <CustomerForm onAddCustomer={handleAddCustomer} />
      {showPopup && selectedCustomer && (
        <BookingPopup customer={selectedCustomer} onConfirm={handleConfirmBooking} />
      )}
      <Receipt customer={selectedCustomer} />
      <Report customers={customers} />
    </div>
  );
};

export default App;
