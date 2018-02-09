import React from 'react';
import PropTypes from 'prop-types';

function InventoryProps(props) {
  return(
    <div>
      <img src={props.pic}></img>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <h2>{props.farmer}</h2>
      <h2>{props.energy}</h2>
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
