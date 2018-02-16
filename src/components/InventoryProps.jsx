import React from 'react';
import PropTypes from 'prop-types';

function InventoryProps(props) {
  const inventoryInformation =
    <div className="invContainer">
      <style jsx>{`
        .invContainer {
          display: flex;
          justify-content: center;
        }
        .invItem {
          border: 2px solid black;
          border-radius: 5px;
          width: 300px;
          height: 350px;
          text-align: center;
          margin: 5px;
          background-color: #fff;
        }
        .image {
          height: 75px;
          padding: 10px;
        }
        .buyButton {
          height: 20px;
          width: 150px;
          border: 2px solid black;
          border-radius: 10px;
          background-color: #EFC7C2;
          font-weight: bold;
          cursor: pointer;
        }
          `}</style>
      <div className="invItem">
        <img src={props.pic} className="image"></img>
        <h2>{props.name}</h2>
        <hr></hr>
        <h4>Price: {props.price}g</h4>
        <h4>Farmer: {props.farmer}</h4>
        <h4>Energy Gain: {props.energy}</h4>
      </div>
    </div>;
  if (props.currentRouterPath === '/employees') {
    return (
      <div>
        {inventoryInformation}
        <button>Delete</button>
      </div>
    );
  } else {
    return (
      <div>
        {inventoryInformation}
        <button className="buyButton">Buy</button>
      </div>
    );
  }
}

InventoryProps.propTypes = {
  pic: PropTypes.any,
  name: PropTypes.string,
  price: PropTypes.number,
  farmer: PropTypes.string,
  energy: PropTypes.number,
  key: PropTypes.string,
  itemId: PropTypes.number,
  button: PropTypes.any,
  onDeletingItem: PropTypes.func,
  currentRouterPath: PropTypes.string,
};

export default InventoryProps;
