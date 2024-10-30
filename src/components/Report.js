// components/Report.js
import React from 'react';

const Report = ({ customers }) => {
  const movieSales = customers.reduce((acc, customer) => {
    acc[customer.movie] = (acc[customer.movie] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="report">
      <h3>Daily Sales Report</h3>
      {Object.keys(movieSales).map((movie) => (
        <p key={movie}>
          {movie}: {movieSales[movie]} tickets sold
        </p>
      ))}
    </div>
  );
};

export default Report;
