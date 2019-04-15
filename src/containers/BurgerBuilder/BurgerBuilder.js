import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js'

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = { 
        salad: 1,
        bacon: 1,
        cheese: 3,
        meat: 5
      
    }
  }

  increaseSalad = () => {
    this.setState({
      ingredients: {salad: this.state.salad++}
    })
  }

  increaseBacon = () => {
    this.setState({
      bacon: this.state.bacon++
    })
  }

  increaseCheese = () => {
    this.setState({
      cheese: this.state.cheese++
    })
  }

  increaseMeat = () => {
    this.setState({
      meat: this.state.meat++
    })
  }

  render() {
    return (
      <Aux>
        <Burger 
        ingredients={this.state} />
        <BuildControls 
        increaseSalad={this.increaseSalad} />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;