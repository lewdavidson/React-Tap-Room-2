import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EmployeeDisplay from './EmployeeDisplay';
import InventoryDisplay from './InventoryDisplay';

function Body() {
  return(
    <div>
      <h1>Lookit me Boddddy</h1>
      <Switch>
        <Route exact path='/' component={InventoryDisplay} />
        <Route exact path='/employees' component={EmployeeDisplay} />
      </Switch>
    </div>
  );
}

export default Body;
