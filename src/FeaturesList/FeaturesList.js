import React, { Component } from 'react';
import slugify from 'slugify';
import Product from '../Product/Product';
import Feature from '../Feature/Feature';



export class FeaturesList extends Component {

    render() {

        const {features, selected, onUpdateFeature} = this.props;

        const featuresList = Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
            const products = features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));

                return (

                    <Product
                        key = {item.name}
                        itemHash = {itemHash}
                        featureHash = {featureHash}
                        item = {item}
                        feature = {feature}
                        selected = {selected}
                        onUpdateFeature = {onUpdateFeature}
                    />

                );
            });
      
            return (

                <Feature
                    feature = {feature}
                    products = {products}
                    featureHash = {featureHash}
                    key = {idx}
                />

            );
          });
       

        return (

            <form className="main__form">
                <h2>Customize your laptop</h2>
                {featuresList}
            </form>
        )
    }
}

export default FeaturesList

