import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pierre from '../assets/img/pierre.png';

function Error404(props){
  return(
    <div className="error">
      <style jsx>{`
          .error {
            text-align: center;
            background: #FFE5D4;
            height: 100vh;
            padding: 150px;
            color: #694F5D;
          }
          img {
            border: 2px solid #68A691;
            padding: 5px;
            border-radius: 50%;
          }
      `}</style>
      <img src={pierre}></img>
      <p>The proprieter of this fine store, Pierre says:</p>
      <h1>The page {props.location.pathname} does not exist!</h1>
      <h2>Would you like to return to <Link to="/">the store</Link> instead?</h2>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
