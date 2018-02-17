import React from 'react';
import EmployeeDisplay from './EmployeeDisplay';
import InventoryDisplay from './InventoryDisplay';
import InventoryProps from './InventoryProps';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

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
      clickedItem: null,
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
    this.handleDeletingItem = this.handleDeletingItem.bind(this);
    this.handleChangingClickedItem = this.handleChangingClickedItem.bind(this);
  }

  handleAddingNewItemToInventory(newItem) {
    let newInventory = this.state.inventory.slice();
    newInventory.push(newItem);
    this.setState({inventory: newInventory});
  }

  handleChangingClickedItem(item){
    this.setState({clickedItem: item});
    console.log('clicked item works');
  }

  handleDeletingItem(clickedItem, item) {
    let updatedInventory = this.state.inventory.filter(clickedItem);
    if(item === clickedItem) {
      updatedInventory.splice(item);
      this.setState({inventory: updatedInventory});
    }
  }

  render(){
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={(props)=><InventoryDisplay inventoryList={this.state.inventory} currentRouterPath={props.location.pathname}
            onItemClick={this.handleChangingClickedItem}
            clickedInventoryItem={this.state.clickedItem}/>} />
          <Route exact path='/employees' render={(props)=><EmployeeDisplay onNewItemAdd={this.handleAddingNewItemToInventory} inventoryList={this.state.inventory} currentRouterPath={props.location.pathname}
            clickedInventoryItem={this.state.clickedItem}
            onDeletingItem={this.handleDeletingItem}
            onItemClick={this.handleChangingClickedItem} />} />
          <Route component={Error404} />
          <Route component={InventoryProps} />
        </Switch>
      </div>
    );
  }
}

export default Body;
