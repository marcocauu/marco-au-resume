import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: ${({ width }) => width};
  padding: ${({ disablePadding }) =>
    disablePadding ? "0" : "2em 2em 2em 8em"};

  @media (max-width: 414px) {
    width: 100%;
    padding: ${({ disablePadding }) => (disablePadding ? "0" : "2em")};
  }
`;

const DescriptionBody = ({ description }) => {
  return description.map((desc, index) => {
    return <p key={index}>{desc}</p>;
  });
};

const Description = ({ description = [], pretext, width, disablePadding }) => {
  return (
    <StyledDiv width={width} disablePadding={disablePadding}>
      {pretext && <>{pretext}</>}
      <DescriptionBody description={description} />
    </StyledDiv>
  );
};

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  pretext: PropTypes.node,
  width: PropTypes.string,
};

Description.defaultProps = {
  width: "100%",
  disablePadding: false,
};

export { Description };
