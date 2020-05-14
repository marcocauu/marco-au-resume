import React from "react";
import PropTypes from "prop-types";

import { StyledDiv, StyledH2, StyledP, StyledHR } from "../shared";

const EducationBody = ({ title, major, concentration, education }) => (
  <>
    <StyledH2>{title.toUpperCase()}</StyledH2>
    {education.map((school, index) => (
      <div key={index}>
        <StyledP bold>{school.name}</StyledP>
        <StyledP>{school.yearAttended}</StyledP>
        <StyledP>
          {major} {school.major}
        </StyledP>
        <StyledP>
          {concentration} {school.concentration}
        </StyledP>
        {index !== education.length - 1 && <StyledHR />}
      </div>
    ))}
  </>
);

const Education = ({ title, major, concentration, education }) => (
  <StyledDiv>
    {EducationBody({ title, major, concentration, education })}
  </StyledDiv>
);

Education.propTypes = {
  title: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  concentration: PropTypes.string.isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      concentration: PropTypes.string.isRequired,
      yearAttended: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Education.defaultProps = {
  title: "",
  major: "",
  concentration: "",
  education: [],
};

export { Education };
