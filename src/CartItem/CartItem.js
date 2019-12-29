import React, { Component } from 'react'


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export class CartItem extends Component {
    
    render() {

        const {feature, featureHash, selectedOption, cost} = this.props;

        return (

            <div className="summary__option" key = {featureHash}>
                <div className="summary__option__label">{feature}</div>
                <div className="summary__option__value">{selectedOption}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(cost)}
                </div>
            </div>

        )
    }
}

export default CartItem
