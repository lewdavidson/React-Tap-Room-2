import React from 'react';
import EmployeeDisplay from './EmployeeDisplay';
import InventoryDisplay from './InventoryDisplay';
import InventoryProps from './InventoryProps';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

//images
import egg from '../assets/img/egg.png';
import eggplant from '../assets/img/Eggplant.png';
import goatmilk from '../assets/img/Goat_Milk.png';
import hotpepper from '../assets/img/Hot_Pepper.png';
import rice from '../assets/img/Rice.png';
import strawberry from '../assets/img/Strawberry.png';
import sugar from '../assets/img/Sugar.png';
import voidegg from '../assets/img/Void.png';
import oil from '../assets/img/Oil.png';
import cabbage from '../assets/img/Cabbage.png';
import backpack from '../assets/img/Backpack.png';
import flour from  '../assets/img/Flour.png';

class  Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: {
        '0': {
          pic: eggplant,
          name: 'Eggplant',
          price: 20,
          farmer: 'Pam',
          energy: 20,
          quantity: 5
        },
        '1': {
          name: 'Sugar',
          price: 100,
          farmer: 'Lewis',
          energy: 25,
          pic: sugar,
          quantity: 25
        },
        '2': {
          name: 'Rice',
          price: 200,
          farmer: 'George',
          energy: 13,
          pic: rice,
          quantity: 18
        },
        '3': {
          name: 'Strawberry',
          price: 100,
          farmer: 'Demitrius',
          energy: 50,
          pic: strawberry,
          quantity: 12
        },
        '4': {
          name: 'Hot Peppers',
          price: 40,
          farmer: 'Shane',
          energy: 12,
          pic: hotpepper,
          quantity: 38
        },
        '5': {
          name: 'Eggs',
          price: 90,
          farmer: 'Marnie',
          energy: 50,
          pic: egg,
          quantity: 40
        },
        '6': {
          name: 'Goat Milk',
          price: 500,
          farmer: 'Lew',
          energy: 500,
          pic: goatmilk,
          quantity: 58
        },
        '7': {
          name: 'Void Egg',
          price: 8000,
          farmer: 'Krobus',
          energy: -50,
          pic: voidegg,
          quantity: 67
        },
        '8': {
          name: 'Oil',
          price: 200,
          farmer: 'Penny',
          energy: 20,
          pic: oil,
          quantity: 19
        },
        '9': {
          name: 'Flour',
          price: 80,
          farmer: 'Nathan',
          energy: 10,
          pic: flour,
          quantity: 12
        },
        '10': {
          name: 'Red Cabbage',
          price: 75,
          farmer: 'Amy',
          energy: 55,
          pic: cabbage,
          quantity: 56
        },
        '11': {
          name: 'Backpack',
          price: 10000,
          farmer: 'No Farmer',
          energy: 0,
          pic: backpack,
          quantity: 39
        }
      }
    };
    this.handleAddingNewItemToInventory = this.handleAddingNewItemToInventory.bind(this);
    this.handleDeletingItem = this.handleDeletingItem.bind(this);
    this.handleBuyingItem = this.handleBuyingItem.bind(this);
    this.handleEditingItem = this.handleEditingItem.bind(this);
  }

  handleAddingNewItemToInventory(newItem) {
    let newInventoryId = v4();
    let newInventory = Object.assign({}, this.state.inventory, {
      [newInventoryId]: newItem
    });
    this.setState({inventory: newInventory});
  }

  handleDeletingItem(itemId) {
    let updatedInventory = Object.assign({}, this.state.inventory);
    delete updatedInventory[itemId];
    this.setState({inventory: updatedInventory});
  }

  handleBuyingItem(itemId) {
    let purchUpdated = Object.assign({}, this.state.inventory);
    let purchInventory = purchUpdated[itemId].quantity -=1;
    if (purchUpdated[itemId].quantity >= 1) {
      this.setState({inventory: purchUpdated});
    } else {
      let updatedInventory = Object.assign({}, this.state.inventory);
      delete updatedInventory[itemId];
      this.setState({inventory: updatedInventory});
    }
  }

  handleEditingItem(itemId) {
    //this will handle defining the specific item clicked
  }

  // will need another function that fires on a "done editing button" to take refs and set app state to include new values.

  render(){
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={(props)=><InventoryDisplay inventoryList={this.state.inventory}
            currentRouterPath={props.location.pathname} onBuyingItem={this.handleBuyingItem} />} />
          <Route exact path='/employees' render={(props)=><EmployeeDisplay onNewItemAdd={this.handleAddingNewItemToInventory} inventoryList={this.state.inventory}
            onDeletingItem={this.handleDeletingItem} onEditingItem={this.handleEditingItem} currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
          <Route component={InventoryProps} />
        </Switch>
      </div>
    );
  }
}

export default Body;
