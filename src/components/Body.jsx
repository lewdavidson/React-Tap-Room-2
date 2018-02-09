import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EmployeeDisplay from './EmployeeDisplay';
import InventoryDisplay from './InventoryDisplay';

function Body() {
  return(
    <div className="container">
      <style jsx>{`
      `}</style>
      <h1>Available Items</h1>
      <InventoryDisplay />
    </div>
  );
}

export default Body;
