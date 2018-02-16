import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function InventoryProps(props) {
  const inventoryInformation =
    <div className="invContainer">
      <div className="invItem">
        {props.currentRouterPath}
        <img src={props.pic} className="image"></img>
        <h2>{props.name}</h2>
        <hr></hr>
        <h4>Price: {props.price}g</h4>
        <h4>Farmer: {props.farmer}</h4>
        <h4>Energy Gain: {props.energy}</h4>
        <button onClick={() => {props.onItemClick({name:props.name, farmer: props.farmer, pic: props.pic, price: props.price, energy: props.energy, id: props.itemId});}}>Delete</button>
      </div>
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
    </div>;
  if (props.currentRouterPath === '/employees') {
    return (
      <div>
        console.log('conditional works');
        {inventoryInformation}
        <button onClick={()=> {props.onItemClick({name:props.name, farmer: props.farmer, pic: props.pic, price: props.price, energy: props.energy, id: props.itemId});}}>Delete</button>
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
  currentRouterPath: PropTypes.string.isRequired,
  onItemClick: PropTypes.func,
  clickedItem: PropTypes.object,
};

export default InventoryProps;
