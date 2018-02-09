import React from 'react';
import PropTypes from 'prop-types';

function InventoryProps(props) {
  return(
    <div className="invContainer">
      <style jsx>{`
          .invContainer {
            display: flex;
            justify-content: center;
          }
          .invItem {
            border: 2px solid black;
            width: 250px;
            height: 350px;
          }
            `}</style>
      <div className="invItem">
        <img src={props.pic}></img>
        <hr></hr>
        <h2>{props.name}</h2>
        <h4>Price: {props.price}g</h4>
        <h4>Farmer: {props.farmer}</h4>
        <h4>Energy Gain: {props.energy}</h4>
        <button>Buy</button>
      </div>
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

export default InventoryProps;
