import React, { Component } from 'react'
import slugify from 'slugify';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export class Product extends Component {

    render() {

        const {itemHash, feature, item, selected, onUpdateFeature} = this.props;

        return (

            <div key={itemHash} className="feature__item">

                <input
                    type = "radio"
                    id = {itemHash}
                    className = "feature__option"
                    name = {slugify(feature)}
                    checked = {item.name === selected[feature].name}
                    onChange = {e => onUpdateFeature(feature, item)}
                />

                <label htmlFor = {itemHash} className = "feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>

            </div>
        )
    }
}

export default Product
