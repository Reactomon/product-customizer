import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import First from '../../resources/images/1.jpeg';
import Second from '../../resources/images/2.jpeg';
import Third from '../../resources/images/3.jpeg';
import Fourth from '../../resources/images/4.jpeg';

import {
    StyledCarousel
} from '../pdp/buildingBlocks/pdpContainer.style';

const ImageCarousel = () => {
    const carouselData = [ First, Second, Third, Fourth ];
    return (
        <StyledCarousel>
            {carouselData.map(data => (
                <div>
                    <img src={data} />
                </div>
            ))}
        </StyledCarousel>
    )
};

export default ImageCarousel;