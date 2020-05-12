import React, { useContext } from "react";
import styled from "styled-components";

import { SessionContext } from "../../providers";
import { DivCentered, H1Centered } from "../../common";

const StyledSpan = styled.span`
  color: ${({ theme: { colors } }) => colors.plum};
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
  const { language } = useContext(SessionContext);
  return (
    <DivCentered height={100}>
      <H1Centered fontSize={9}>
        {language.hello} <StyledSpan>{language.name}</StyledSpan>
      </H1Centered>
      <StyledP>{language.scroll}</StyledP>
    </DivCentered>
  );
};

export { Intro };
