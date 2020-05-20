import React, { useContext } from "react";
import styled from "styled-components";

import { DivCentered, Section } from "../../common";
import { Skills, Education } from "./components";
import { SessionContext } from "../../providers";

const StyledDivCentered = styled(DivCentered)`
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-evenly;
  padding: 2em 12em 2em 12em;

  @media (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0em;
  }
`;

const SkillsEducation = () => {
  const { language } = useContext(SessionContext);
  return (
    <Section headerText={language.skillsEducation} contentHeight={110} darkMode>
      <StyledDivCentered height={110} darkMode>
        <Skills title={language.skillTitle} skills={language.skills} />
        <Education
          title={language.educationTitle}
          major={language.programTitle}
          concentration={language.concentrationTitle}
          education={language.schools}
        />
      </StyledDivCentered>
    </Section>
  );
};

export { SkillsEducation };
