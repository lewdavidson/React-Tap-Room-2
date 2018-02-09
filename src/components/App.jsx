import React from 'react';
import Nav from './Nav';
import Body from './Body';
import { Switch, Route } from 'react-router-dom';
import EmployeeDisplay from './EmployeeDisplay';
import InventoryDisplay from './InventoryDisplay';



function App() {
  return(
    <div>
      <style global jsx>{`
        body {
          font-family: 'Bitter', serif;
        }
      `}</style>
      <Nav />
      <Body />
        <Switch>
          <Route exact path='/employees' component={EmployeeDisplay} />
        </Switch>
    </div>
  );
}

export default App;
