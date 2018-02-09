import React from 'react';
import { Link } from 'react-router-dom';


function Nav(){
  return(
    <div className="navContainer">
      <style jsx>{`
            .navContainer{
              display: flex;
              position: sticky;
              top: 0;
              justify-content: space-between;
              padding: 10px;
              height: 60px;
              align-items: center;
              background: rgba(150,114,134, 0.8);
              color: #283044;
              border-radius: 5px;
              box-shadow: 2px 2px #BFA89E;
            }
            .links {
              display: flex;
              width: 200px;
              justify-content: space-between;
              margin-right: 10px;
              text-decoration: none;
              color: #BFD3C1;
            }
        `}</style>
      <h1 className="lead">Welcome To Pierres General Store</h1>
      <div className="links">
        <Link to="/employees">Employees Only</Link> | <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Nav;
