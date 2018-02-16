import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EmployeeDisplay from './EmployeeDisplay';
import InventoryDisplay from './InventoryDisplay';
import Error404 from './Error404';

class  Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    inventory: [
        {
          pic: eggplant,
          name: 'Eggplant',
          price: 20,
          farmer: 'Pam',
          energy: 20,
        },
        {
          name: 'Sugar',
          price: 100,
          farmer: 'Lewis',
          energy: 25,
          pic: sugar
        },
        {
          name: 'Rice',
          price: 200,
          farmer: 'George',
          energy: 13,
          pic: rice
        },
        {
          name: 'Strawberry',
          price: 100,
          farmer: 'Demitrius',
          energy: 50,
          pic: strawberry
        },
        {
          name: 'Hot Peppers',
          price: 40,
          farmer: 'Shane',
          energy: 12,
          pic: hotpepper
        },
        {
          name: 'Eggs',
          price: 90,
          farmer: 'Marnie',
          energy: 50,
          pic: egg
        },
        {
          name: 'Goat Milk',
          price: 500,
          farmer: 'Lew',
          energy: 500,
          pic: goatmilk
        },
        {
          name: 'Void Egg',
          price: 8000,
          farmer: 'Krobus',
          energy: -50,
          pic: voidegg
        },
        {
          name: 'Oil',
          price: 200,
          farmer: 'Penny',
          energy: 20,
          pic: oil
        },
        {
          name: 'Flour',
          price: 80,
          farmer: 'Nathan',
          energy: 10,
          pic: flour
        },
        {
          name: 'Red Cabbage',
          price: 75,
          farmer: 'Amy',
          energy: 55,
          pic: cabbage
        },
        {
          name: 'Backpack',
          price: 10000,
          farmer: 'No Farmer',
          energy: 0,
          pic: backpack
        }
      ]
    };
    this.handleAddingNewItemToInventory = this.handleAddingNewItemToInventory.bind(this);
  }

  handleAddingNewItemToInventory(newItem) {
    let newInventory = this.state.inventory.slice();
    newInventory.push(newItem);
    this.setState({inventory: newInventory});
  }

  return(
    <div className="container">
      <Switch>
        <Route exact path='/' component={InventoryDisplay} />
        <Route exact path='/employees' render={()=><EmployeeDisplay onNewItemAdd={this.handleAddingNewItemToInventory}/>} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Body;
