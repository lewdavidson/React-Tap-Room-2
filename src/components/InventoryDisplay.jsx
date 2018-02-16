import React from 'react';
import InventoryProps from './InventoryProps';
import PropTypes from 'prop-types';


function InventoryDisplay(props) {
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
        {props.inventoryList.map((inventory) =>
          <InventoryProps
            pic={inventory.pic}
            name={inventory.name}
            price={inventory.price}
            farmer={inventory.farmer}
            energy={inventory.energy}
            key={inventory.id}
            button={<span key={inventory.id} className="button">Buy</span>} />
        )}
      </div>
    </div>
  );
}

InventoryDisplay.propTypes = {
  inventoryList: PropTypes.array,
};

export default InventoryDisplay;
