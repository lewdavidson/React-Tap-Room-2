import React from 'react';
import PropTypes from 'prop-types';

function InventoryProps(props) {
  return(
    <div>
      <img src={props.pic}></img>
      <h2>{props.name}</h2>
      <h4>Price: {props.price}</h4>
      <h4>Farmer: {props.farmer}</h4>
      <h4>Energy Gain: {props.energy}</h4>
      <button>Buy</button>
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
