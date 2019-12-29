import React, { Component } from 'react';


export class Feature extends Component {

    render() {

        const {featureHash, feature, products} = this.props;

        return (

            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {products}
            </fieldset>
        )
    }
}

export default Feature
