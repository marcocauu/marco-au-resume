import React from "react";
import styled from "styled-components";

import { DivCentered } from "../../common";
import { Skills, Education } from "./components";

const StyledDivCentered = styled(DivCentered)`
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SkillsEducation = () => {
  return (
    <StyledDivCentered height={110} darkMode>
      <Skills />
      <Education />
    </StyledDivCentered>
  );
};

export { SkillsEducation };
