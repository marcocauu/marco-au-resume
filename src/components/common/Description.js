import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 2em 2em 2em 8em;

  @media (max-width: 414px) {
    width: 100%;
    margin: 2em;
  }
`;

const DescriptionBody = ({ description }) =>
  description.map((desc, index) => <p key={index}>{desc}</p>);

const Description = ({ description = [], pretext }) => (
  <StyledDiv>
    {pretext && <>{pretext}</>}
    <DescriptionBody description={description} />
  </StyledDiv>
);

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
};

export { Description };
