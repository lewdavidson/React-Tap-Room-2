import React from 'react';
import InventoryProps from './InventoryProps';
import inventory from './data';
import PropTypes from 'prop-types';

function EmployeeDisplay(props) {
  let _name = null;
  let _price = null;
  let _farmer = null;
  let _energy = null;
  let _pic = null;

  function handleAddingItem (event) {
    event.preventDefault();
    props.onNewItemAdd({name: _name.value, price: _price.value, farmer: _farmer.value, energy: _energy.value, pic: _pic.value});
    _name.value = '';
    _price.value = '';
    _farmer.value = '';
    _energy.value = '';
    _pic.value = '';
  }
  return(
    <div>
      <style jsx>{`
          h1 {
            color: #694F5D;
            text-align: center;
            margin-top: 50px;
            margin-bottom: 50px;
          }
          h2 {
            color: #694F5D;
          }
          input {
            height: 20px;
            width: 250px;
            margin-right: 5px;
            margin-left: 5px;
            margin-bottom: 15px;
            border: 1px solid black;
          }
          button {
            margin-left: 20px;
            height: 30px;
            width: 200px;
            border-radius: 5px;
            box-shadow: 2px 2px gray;
            font-weight: bold;
            background-color: #BFD3C1;
          }
          form {
            margin-bottom: 100px;
          }
          hr {
            margin-bottom: 45px;
          }
          .info {
            display: flex;
            flex-wrap: wrap;
          }
            `}</style>
      <h1>Pierre's Employee Access Area</h1>
      <h2>Restock The Shelves</h2>
      <hr></hr>
      <form onSubmit={handleAddingItem}>
        <input type='text'
          id='name'
          placeholder='Item Name'
          ref={(input) => {_name = input;}}/>
        <input type='number'
          id='price'
          placeholder='Item Price'
          ref={(input) => {_price = input;}}/>
        <input type='text'
          id='farmer'
          placeholder='Items Farmer'
          ref={(input) => {_farmer = input;}}/>
        <input type='number'
          id='energy'
          placeholder='Energy Level Increase'
          ref={(input) => {_energy = input;}}/>
        <input type=''
          id='pic'
          placeholder='Item Picture URL'
          ref={(input) => {_pic = input;}}/>
        <button type='submit'>Add Item to Inventory</button>
      </form>
      <h2>Edit or Remove An Item</h2>
      <hr></hr>
      <p>Choose an item to remove:</p>
      <div className="info">
        {inventory.map((inventory, index) =>
          <InventoryProps
            pic={inventory.pic}
            name={inventory.name}
            price={inventory.price}
            farmer={inventory.farmer}
            energy={inventory.energy}
            key={index}
            button={<span key={index} className="button">Edit</span>} />
        )}
      </div>
    </div>
  );
}

EmployeeDisplay.propTypes = {
  onNewItemAdd: PropTypes.func
};

export default EmployeeDisplay;
