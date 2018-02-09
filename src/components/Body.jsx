import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EmployeeDisplay from './EmployeeDisplay';
import InventoryDisplay from './InventoryDisplay';
import Error404 from './Error404';

function Body() {
  return(
    <div className="container">
      <Switch>
        <Route exact path='/' component={InventoryDisplay} />
        <Route exact path='/employees' component={EmployeeDisplay} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Body;
