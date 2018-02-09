import React from 'react';
import InventoryProps from './InventoryProps';
import egg from '../assets/img/egg.png';
import eggplant from '../assets/img/Eggplant.png';
import goatmilk from '../assets/img/Goat_Milk.png';
import hotpepper from '../assets/img/Hot_Pepper.png';
import rice from '../assets/img/Rice.png';
import strawberry from '../assets/img/Strawberry.png';
import sugar from '../assets/img/Sugar.png';
import voidegg from '../assets/img/Void.png';
import oil from '../assets/img/Oil.png';
import cabbage from '../assets/img/Cabbage.png';
import backpack from '../assets/img/Backpack.png';
import flour from  '../assets/img/Flour.png';

const inventory = [
  {
    pic: eggplant,
    name: 'Eggplant',
    price: 20,
    farmer: 'Pam',
    energy: 20,
  },
  {
    name: 'Sugar',
    price: 100,
    farmer: 'Lewis',
    energy: 25,
    pic: sugar
  },
  {
    name: 'Rice',
    price: 200,
    farmer: 'George',
    energy: 13,
    pic: rice
  },
  {
    name: 'Strawberry',
    price: 100,
    farmer: 'Demitrius',
    energy: 50,
    pic: strawberry
  },
  {
    name: 'Hot Peppers',
    price: 40,
    farmer: 'Shane',
    energy: 12,
    pic: hotpepper
  },
  {
    name: 'Eggs',
    price: 90,
    farmer: 'Marnie',
    energy: 50,
    pic: egg
  },
  {
    name: 'Goat Milk',
    price: 500,
    farmer: 'Lew',
    energy: 500,
    pic: goatmilk
  },
  {
    name: 'Void Egg',
    price: 8000,
    farmer: 'Krobus',
    energy: -50,
    pic: voidegg
  },
  {
    name: 'Oil',
    price: 200,
    farmer: 'Penny',
    energy: 20,
    pic: oil
  },
  {
    name: 'Flour',
    price: 80,
    farmer: 'Nathan',
    energy: 10,
    pic: flour
  },
  {
    name: 'Red Cabbage',
    price: 75,
    farmer: 'Amy',
    energy: 55,
    pic: cabbage
  },
  {
    name: 'Backpack',
    price: 10000,
    farmer: 'No Farmer',
    energy: 0,
    pic: backpack
  }
];


function InventoryDisplay() {
  return(
    <div>
      <style jsx>{`
          .barf {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          h1 {
            text-align: center;
            margin: 50px;
            color: #68A691;
          }
          `}</style>
      <h1>Available Inventory</h1>
      <div className="barf">
          {inventory.map((inventory, index) =>
            <InventoryProps pic={inventory.pic}
              name={inventory.name}
              price={inventory.price}
              farmer={inventory.farmer}
              energy={inventory.energy}
              key={index}/>
          )}
        </div>
    </div>
  );
}

export default InventoryDisplay;
