import React from 'react';
import PropTypes from 'prop-types';

function InventoryData(props) {
  return(
    <div>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <h2>{props.farmer}</h2>
      <h2>{props.energy}</h2>
      <h2>{props.pic}</h2>
    </div>
  );
}

InventoryData.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  farmer: PropTypes.string,
  energy: PropTypes.number,
  pic: PropTypes.any
};

export default InventoryData;
