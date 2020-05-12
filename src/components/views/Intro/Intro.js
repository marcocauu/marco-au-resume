import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
`;

const StyledP = styled.p`
  position: absolute;
  bottom: 5em;
  left: 50%;
  transform: translateX(-50%);
  color: #3d3547;
  font-weight: 500;
`;

const Intro = () => {
  return (
    <StyledDiv>
      <StyledP>Scroll</StyledP>
    </StyledDiv>
  );
};

export { Intro };
