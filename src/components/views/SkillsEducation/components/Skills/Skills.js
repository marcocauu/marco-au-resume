import React from "react";

import { StyledDiv, StyledH2, StyledP } from "../shared";

const SkillBody = ({ skills, title }) => (
  <>
    <StyledH2>{title.toUpperCase()}</StyledH2>
    {skills.map((skill, index) => (
      <div key={index}>
        <StyledP style={{ color: "white" }} bold>
          {`${skill.title}:`}
        </StyledP>
        <StyledP>{skill.frameworks.join(", ")}</StyledP>
      </div>
    ))}
  </>
);

const Skills = ({ skills, title }) => {
  return (
    <StyledDiv>
      <SkillBody skills={skills} title={title} />
    </StyledDiv>
  );
};

export { Skills };
