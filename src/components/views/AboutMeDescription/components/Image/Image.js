import React, { useContext } from "react";
import styled from "styled-components";

import { SessionContext } from "../../../../providers";

const StyledDiv = styled.div`
  width: 40%;
  // padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 375px) {
    display: none;
  }
`;

const StyledP = styled.p`
  font-style: italic;
`;

const Image = () => {
  const { basename } = useContext(SessionContext);
  return (
    <StyledDiv>
      <img
        style={{ maxHeight: "50%", maxWidth: "50%" }}
        src={`${basename}/images/kenting.jpg`}
      />
      <StyledP>Kenting 墾丁, Taiwan</StyledP>
    </StyledDiv>
  );
};

export { Image };
