import React from 'react';
import Nav from './Nav';
import Body from './Body';
import EmployeeDisplay from './EmployeeDisplay';
import InventoryDisplay from './InventoryDisplay';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={InventoryDisplay} />
        <Route exact path='/employees' component={EmployeeDisplay} />
      </Switch>
      <Body />
    </div>
  );
}

export default App;
