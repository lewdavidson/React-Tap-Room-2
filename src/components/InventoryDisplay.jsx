import React from 'react';
import InventoryProps from './InventoryProps';
import inventory from './data';



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
