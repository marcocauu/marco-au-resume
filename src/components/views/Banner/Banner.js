import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";
import PropTypes from "prop-types";

import "../../../resources/styles/Banner.css";

const StyledVerticalDiv = styled.div`
  width: 100%;
  overflow-x: hidden;

  &:before {
    position: fixed;
    display: inline-block;
    padding: 4px;
    top: 10px;
    left: 50%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    color: white;
    z-index: 1000;
    transform: translate3d(-50%, 0, 0);
  }
`;

const StyledBannerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Banner = ({ imageSrc, height }) => (
  <StyledVerticalDiv>
    <StyledBannerDiv>
      <ParallaxBanner
        style={{
          height: `${height}vh`,
        }}
        className={"bannerBg"}
        layers={[{ image: imageSrc, amount: 0.2 }]}
      />
    </StyledBannerDiv>
  </StyledVerticalDiv>
);

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

Banner.defaultProps = {
  height: 100,
};

export { Banner };
