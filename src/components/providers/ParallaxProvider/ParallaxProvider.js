import React from "react";
import PropTypes from "prop-types";
import { ParallaxProvider as ParallaxProv } from "react-scroll-parallax";

const ParallaxProvider = ({ children }) => {
  return <ParallaxProv>{children}</ParallaxProv>;
};

ParallaxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ParallaxProvider };
