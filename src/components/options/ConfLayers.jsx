import React, { Component } from 'react';
import { ConfiguratorContextÂ } from "../../contexts/Configurator";
import SwatchOptions from "./SwatchOptions";

class ConfLayers extends Component {

    static contextType = ConfiguratorContext;

    render() {

        const configurations = this.context && this.context.productData ? this.context.productData.product.configuration: {};
        const currentLayerColors = this.context.currentLayerColors;
        
        return (
            <div className="prod-custom-accordion-wrapper">
                {
                configurations.layer.map( (layer, index) => {
                    return <SwatchOptions key={`layer-${index}`} tabIndex={index} layer={layer} selectedSwatch={currentLayerColors[layer.layer_obj.title]} />
                })
                }
            </div>
        )
    }
}

export default ConfLayers;