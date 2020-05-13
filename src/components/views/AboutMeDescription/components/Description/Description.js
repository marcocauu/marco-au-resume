import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  padding: 2em 2em 2em 8em;

  @media (max-width: 414px) {
    width: 100%;
    padding: 2em;
  }
`;

const DescriptionBody = ({ description }) => {
  return description.map((desc, index) => {
    return <p key={index}>{desc}</p>;
  });
};

const Description = ({ description }) => {
  return (
    <StyledDiv>
      <DescriptionBody description={description} />
    </StyledDiv>
  );
};

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
};

export { Description };
