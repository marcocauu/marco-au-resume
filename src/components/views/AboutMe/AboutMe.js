import React, { useContext } from "react";
import styled from "styled-components";

import { SessionContext } from "../../providers";
import { DivCentered, H1Centered } from "../../common";

const StyledH1 = styled(H1Centered)`
  border-top: ${({ theme: { colors } }) => `0.1em solid ${colors.plum}`};
  border-bottom: ${({ theme: { colors } }) => `0.1em solid ${colors.plum}`};
  padding: 0.25em;
  font-style: italic;
`;

const AboutMe = () => {
  const { language } = useContext(SessionContext);
  return (
    <DivCentered height={50}>
      <StyledH1 fontSize={7}>{language.aboutMe}</StyledH1>
    </DivCentered>
  );
};

export { AboutMe };
