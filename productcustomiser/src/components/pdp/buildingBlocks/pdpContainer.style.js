import styled from "styled-components";
import Box from '@material-ui/core/Box';
import { Card, Link } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";

const StyledContainer = styled(Box)` 
  display: flex;
  overflow: auto;
  justify-content: center;
  margin: 20px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledPrice = styled.span`
  font-weight: bold;
`;

const StyledColumn = styled(Box)` 
  padding: 20px;
  height: 500px;
  @media (min-width: 768px) {
    width: 450px !important;
  }
`;

const StyledStickyWrapper = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    width: 450px !important;
  }
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-self: flex-start;
`;

const StyledImageThumbnail = styled.img` 
  padding: 20px;
  width: 300px;
  height: 300px;
`;

const StyledProductHeading = styled.h1`
  margin-top: 0;
  font-size: 32px;
  line-height: 1.125;
  font-weight: 600;
  letter-spacing: .004em;
`;

const StyledHorizontalBlock = styled.div`
  display: flex;
`;

const StyledSecondaryHeading = styled.h2`
  font-size: 18px;
`;

const StyledSecondarySubHeading = styled.h2`
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
`;


const StyledDescriptionUnstyledList = styled.ul`
  list-style-type:none;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.palette.info.alt.color};
  font-size: ${props => props.theme.palette.info.alt.fontSize};
  li {
    padding: 6px 0;
  }
`;

const StyledHorizontalLine = styled.hr`
   margin: 20px 0;
   color: ${props => props.theme.palette.info.alt.color}
`;

const StyledCard = styled(Card)`
  margin: 15px 0;
  border-color: ${props => props.selected && props.theme.palette.error.main} !important;
  text-align: center;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;  }
  }
  width: 100%;
`;

const StyledCardContent = styled(Card)`
  font-size: ${props => props.theme.palette.heading.primary.fontSize};
  padding: 16px;
  height: 100%
`;

const StyledCarousel = styled(Carousel)`
  position: sticky;
`;

export {
  StyledContainer,
  StyledCarousel,
  StyledColumn,
  StyledImageThumbnail,
  StyledProductHeading,
  StyledDescriptionUnstyledList,
  StyledHorizontalLine,
  StyledSecondaryHeading,
  StyledLink,
  StyledCard,
  StyledCardContent,
  StyledSecondarySubHeading,
  StyledPrice,
  StyledHorizontalBlock,
  StyledStickyWrapper
};

