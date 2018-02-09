import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return(
    <div>
      <h1>The Page{props.location.pathname} does not exist!</h1>
      <h2>Would you like to return to <Link to="/">the store</Link> instead?</h2>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
