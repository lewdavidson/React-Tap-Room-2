import React from 'react';
import { Link } from 'react-router-dom';


function Nav(){
  return(
    <div>
      <h1>Nav Works</h1>
      <Link to="/employees">Employees Only</Link> | <Link to="/">Home</Link>
    </div>
  );
}

export default Nav;
