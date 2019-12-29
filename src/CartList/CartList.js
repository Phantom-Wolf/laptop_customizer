import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export class Cart extends Component {
    
    render() {

        const {selected} = this.props;

        const total = Object.keys(selected).reduce(
            (acc, curr) => acc + selected[curr].cost,
            0
        );

        const summary = Object.keys(selected).map((feature, idx) => {

            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];
      
            return (

                <CartItem
                    feature = {feature}
                    featureHash = {featureHash}
                    selectedOption = {selectedOption.name}
                    cost = {selectedOption.cost}
                />

            );
        });

        return (

            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>

        )
    }
}

export default Cart
