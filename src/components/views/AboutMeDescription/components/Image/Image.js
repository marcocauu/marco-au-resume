import React, { useContext } from "react";
import styled from "styled-components";

import { SessionContext } from "../../../../providers";

const StyledDiv = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 414px) {
    display: none;
  }
`;

const StyledP = styled.p`
  font-style: italic;
`;

const StyledImg = styled.img`
  max-height: 70%;
  max-width: 70%;
`;

const Image = () => {
  const { language, basename } = useContext(SessionContext);
  return (
    <StyledDiv>
      <StyledImg src={`${basename}/images/kenting.jpg`} />
      <StyledP>{language.kenting}</StyledP>
    </StyledDiv>
  );
};

export { Image };
