import React, { useContext } from "react";
import styled from "styled-components";

import { SessionContext } from "../../providers";
import { DivCentered, H1Centered } from "../../common";
import { Description } from "./components";

const StyledDiv = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
  flex: 1;
  div > img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
  }
`;

const AboutMeDescription = () => {
  const { language, basename } = useContext(SessionContext);
  return (
    <DivCentered height={75}>
      <Description />
      {/* <StyledDiv>
          <img
            style={{ maxWidth: "100%", height: "auto", width: "auto" }}
            src={`${basename}/images/kenting.jpg`}
          />
        </StyledDiv> */}
    </DivCentered>
  );
};

export { AboutMeDescription };
