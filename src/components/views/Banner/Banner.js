import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";

import "./Banner.css";

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

const Banner = ({ imageSrc }) => {
  return (
    <StyledVerticalDiv>
      <StyledBannerDiv>
        <ParallaxBanner
          style={{
            height: "50vh",
          }}
          className={"bannerBg"}
          layers={[{ image: imageSrc, amount: 0.2 }]}
        />
      </StyledBannerDiv>
    </StyledVerticalDiv>
  );
};

export { Banner };