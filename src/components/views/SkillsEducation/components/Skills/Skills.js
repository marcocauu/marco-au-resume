import React from "react";
import PropTypes from "prop-types";

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

const Skills = ({ skills, title }) => (
  <StyledDiv>
    <SkillBody skills={skills} title={title} />
  </StyledDiv>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

Skills.defaultProps = {
  skills: [],
  title: "",
};

export { Skills };
