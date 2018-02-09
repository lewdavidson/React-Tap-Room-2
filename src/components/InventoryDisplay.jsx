import React from 'react';
import InventoryData from './InventoryData';


const inventory = [
  {
    name: 'Eggplant',
    price: '20g',
    farmer: 'Pam',
    energy: '20',
    pic: ''
  },
  {
    name: 'Sugar',
    price: '100g',
    farmer: 'Lewis',
    energy: '25',
    pic: ''
  },
  {
    name: 'Rice',
    price: '200g',
    farmer: 'George',
    energy: '13',
    pic: ''
  },
  {
    name: 'Strawberry',
    price: '100g',
    farmer: 'Demitrius',
    energy: '50',
    pic: ''
  },
  {
    name: 'Hot Peppers',
    price: '40g',
    farmer: 'Shane',
    energy: '12',
    pic: ''
  },
  {
    name: 'Eggs',
    price: '90g',
    farmer: 'Marnie',
    energy: '50',
    pic: ''
  },
  {
    name: 'Goat Milk',
    price: '500g',
    farmer: 'Lew',
    energy: '500',
    pic: ''
  },
  {
    name: 'Void Egg',
    price: '8000g',
    farmer: 'Krobus',
    energy: '-50',
    pic: ''
  }
];


function InventoryDisplay() {
  return(
    <div>
      {inventory.map((inventory, index) =>
        <InventoryData name={inventory.name}
          price={inventory.price}
          farmer={inventory.farmer}
          energy={inventory.energy}
          pic={inventory.pic}
          key={index}/>
      )}
    </div>
  );
}

export default InventoryDisplay;
