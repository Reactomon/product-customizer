import React, { useState } from 'react';
import HeroImageCarousel from '../carousel/carousel';
import {
    StyledContainer,
    StyledColumn,
    StyledHorizontalBlock,
    StyledProductHeading,
    StyledDescriptionUnstyledList,
    StyledHorizontalLine,
    StyledSecondaryHeading,
    StyledPrice,
    StyledLink,
    StyledCard,
    StyledCardContent,
    StyledSecondarySubHeading,
    StyledStickyWrapper
} from '../pdp/buildingBlocks/pdpContainer.style';

import {
    detailedProductDescription,
    processorVariants,
    memoryVariants,
    graphicsVariants,
    storageVariants,
    finalCutOptions,
    logicProOptions
} from '../pdp/buildingBlocks/productConfigs';

const ProductCustomizerView = () => {
    const [defaultProcessorConfig, setDefaultProcessorConfig] = useState(processorVariants);
    const [defaultMemoryConfig, setDefaultMemoryConfig] = useState(memoryVariants);
    const [defaultGraphicsConfig, setDefaultGraphicsConfig] = useState(graphicsVariants);
    const [defaultStorageConfig, setDefaultStorageConfig] = useState(storageVariants);
    const [defaultFinalCutConfig, setDefaultFinalCutConfig] = useState(finalCutOptions);
    const [defaultLogicProConfig, setDefaultLogicProConfig] = useState(logicProOptions);

    const handleChange = (customization, index, setValue) => {
        setValue(customization.map((variant, i) => {
            if (i !== index) variant.selected = false;
            else variant.selected = true;
            return variant;
        }));
    }

    return (
        <StyledContainer>
            <StyledStickyWrapper>
                <HeroImageCarousel/>
            </StyledStickyWrapper>
            <StyledColumn>
                <React.Fragment>
                    <StyledProductHeading>
                        Customise your 16‑inch MacBook Pro - Space Grey
                </StyledProductHeading>
                    <StyledDescriptionUnstyledList>
                        {detailedProductDescription.map((d, index) => (
                            <li key={`description detail_${index}`}>
                                {d}
                            </li>
                        ))}
                    </StyledDescriptionUnstyledList>
                    <StyledHorizontalLine />
                </React.Fragment>
                <React.Fragment>
                    <StyledSecondaryHeading>
                        Processor
                    </StyledSecondaryHeading>
                    <StyledLink display="block" href="#" onClick={() => { }}>
                        Which processor is right for you?
                    </StyledLink>
                    <React.Fragment>
                        {defaultProcessorConfig.map((variant, index) => {
                            return (
                                <StyledCard key={`processorType_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(defaultProcessorConfig, index, setDefaultProcessorConfig)}>
                                    <StyledCardContent>
                                        {variant.description} {variant.additionalAmountRequired ? (<StyledPrice> &nbsp; +&#8377;{variant.additionalAmountRequired}</StyledPrice>) : null}
                                    </StyledCardContent>
                                </StyledCard>)
                        })}
                    </React.Fragment>

                </React.Fragment>
                <React.Fragment>
                    <StyledHorizontalLine />
                    <React.Fragment>
                        <StyledSecondaryHeading>
                            Memory
                    </StyledSecondaryHeading>
                        <StyledLink display="block" href="#" onClick={() => { }}>
                            How much memory is right for you?
                    </StyledLink>
                        <React.Fragment>
                            {defaultMemoryConfig.map((variant, index) => {
                                return (
                                    <StyledCard key={`memoryType_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(defaultMemoryConfig, index, setDefaultMemoryConfig)}>
                                        <StyledCardContent>
                                            {variant.description} {variant.additionalAmountRequired ? (<StyledPrice> &nbsp; +&#8377;{variant.additionalAmountRequired}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>)
                            })}
                        </React.Fragment>

                    </React.Fragment>
                </React.Fragment>
                <React.Fragment>
                    <StyledHorizontalLine />
                    <React.Fragment>
                        <StyledSecondaryHeading>
                            Graphics
                    </StyledSecondaryHeading>
                        <StyledLink display="block" href="#" onClick={() => { }}>
                            Which graphics option is right for you?
                    </StyledLink>
                        <React.Fragment>
                            {defaultGraphicsConfig.map((variant, index) => {
                                return (
                                    <StyledCard key={`graphicsType_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(defaultGraphicsConfig, index, setDefaultGraphicsConfig)}>
                                        <StyledCardContent>
                                            {variant.description} {variant.additionalAmountRequired ? (<StyledPrice> &nbsp; +&#8377;{variant.additionalAmountRequired}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>)
                            })}
                        </React.Fragment>
                    </React.Fragment>
                </React.Fragment>
                <React.Fragment>
                    <StyledHorizontalLine />
                    <React.Fragment>
                        <StyledSecondaryHeading>
                            Storage
                    </StyledSecondaryHeading>
                        <StyledLink display="block" href="#" onClick={() => { }}>
                            How much storage is right for you?
                    </StyledLink>
                        <React.Fragment>
                            {defaultStorageConfig.map((variant, index) => {
                                return (
                                    <StyledCard key={`storageType_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(defaultStorageConfig, index, setDefaultStorageConfig)}>
                                        <StyledCardContent>
                                            {variant.description} {variant.additionalAmountRequired ? (<StyledPrice> &nbsp; +&#8377;{variant.additionalAmountRequired}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>
                                )
                            })}
                        </React.Fragment>
                    </React.Fragment>
                </React.Fragment>
                <React.Fragment>
                    <StyledHorizontalLine />
                    <React.Fragment>
                        <StyledSecondarySubHeading>
                            Pre-installed Software
                         </StyledSecondarySubHeading>
                        <StyledSecondaryHeading>
                            Final Cut Pro
                         </StyledSecondaryHeading>
                        <StyledLink display="block" href="#" onClick={() => { }}>
                            Learn more
                        </StyledLink>
                        <StyledHorizontalBlock>
                            {defaultFinalCutConfig.map((variant, index) => {
                                return (
                                    <StyledCard key={`firstCutPro_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(defaultFinalCutConfig, index, setDefaultFinalCutConfig)}>
                                        <StyledCardContent>
                                            {variant.description} {variant.additionalAmountRequired ? (<StyledPrice> &nbsp; +&#8377;{variant.additionalAmountRequired}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>
                                )
                            })}
                        </StyledHorizontalBlock>
                        <StyledSecondaryHeading>
                            Logic Pro
                         </StyledSecondaryHeading>
                        <StyledLink display="block" href="#" onClick={() => { }}>
                            Learn more
                        </StyledLink>
                        <StyledHorizontalBlock>
                            {defaultLogicProConfig.map((variant, index) => {
                                return (
                                    <StyledCard key={`firstCutPro_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(defaultLogicProConfig, index, setDefaultLogicProConfig)}>
                                        <StyledCardContent>
                                            {variant.description} {variant.additionalAmountRequired ? (<StyledPrice> &nbsp; +&#8377;{variant.additionalAmountRequired}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>
                                )
                            })}
                        </StyledHorizontalBlock>
                    </React.Fragment>
                </React.Fragment>
            </StyledColumn>
        </StyledContainer>
    );
};

export default ProductCustomizerView;
