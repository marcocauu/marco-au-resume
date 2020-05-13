import React, { useContext } from "react";

import { SessionContext } from "../../../../providers";
import { StyledDiv, StyledH2, StyledP } from "../shared";

const SkillBody = (language) => (
  <>
    <StyledH2>{language.skillTitle.toUpperCase()}</StyledH2>
    {language.skills.map((skill, index) => (
      <div key={index}>
        <StyledP style={{ color: "white" }} bold>
          {`${skill.title}:`}
        </StyledP>
        <StyledP>{skill.frameworks.join(", ")}</StyledP>
      </div>
    ))}
  </>
);

const Skills = () => {
  const { language } = useContext(SessionContext);
  return <StyledDiv>{SkillBody(language)}</StyledDiv>;
};

export { Skills };