import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger.js'

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 10,
        cheese: 30,
        meat: 50
      }
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;