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
        {Object.keys(props.inventoryList).map(function(itemId) {
          let inventory = props.inventoryList[itemId];
          return <InventoryProps
            pic={inventory.pic}
            name={inventory.name}
            price={inventory.price}
            farmer={inventory.farmer}
            energy={inventory.energy}
            quantity={inventory.quantity}
            key={itemId}
            itemId={itemId}
            currentRouterPath={props.currentRouterPath}
            onDeletingItem={props.onDeletingItem}
            onBuyingItem={props.onBuyingItem}
             />;
        })}
      </div>
    </div>
  );
}

InventoryDisplay.propTypes = {
  inventoryList: PropTypes.object,
  onDeletingItem: PropTypes.func,
  onBuyingItem: PropTypes.func,
  currentRouterPath: PropTypes.string.isRequired,
  handleChangingClickedItem: PropTypes.func,
};

export default InventoryDisplay;
