import React from 'react';
import InventoryProps from './InventoryProps';
import PropTypes from 'prop-types';
import inventory from './data';

function EmployeeDisplay() {
  return(
    <div>
      <h1>Pierre's Employee Access Area</h1>
      <h2>Restock The Shelves</h2>
      <hr></hr>
      <form>
        <input type='text'
          id='name'
          placeholder='Item Name'/>
        <input type='number'
          id='price'
          placeholder='Item Price'/>
        <input type='text'
          id='farmer'
          placeholder='Items Farmer'/>
        <input type='number'
          id='energy'
          placeholder='Energy Level Increase'/>
        <input type=''
          id='pic'
          placeholder='Item PIcture'/>
        <button type='submit'>Add Item to Inventory</button>
      </form>
      <h2>Edit or Remove An Item</h2>
      <hr></hr>
      <p>Choose an item to remove:</p>
      {inventory.map((inventory, index) =>
        <InventoryProps pic={inventory.pic}
          name={inventory.name}
          price={inventory.price}
          farmer={inventory.farmer}
          energy={inventory.energy}
          key={index}/>
      )}
    </div>
  );
}

InventoryProps.propTypes = {
  pic: PropTypes.any,
  name: PropTypes.string,
  price: PropTypes.number,
  farmer: PropTypes.string,
  energy: PropTypes.number,
};

export default EmployeeDisplay;
