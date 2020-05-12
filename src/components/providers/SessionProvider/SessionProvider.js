import React from "react";
import PropTypes from "prop-types";

const SessionContext = React.createContext({});

const SessionProvider = ({ children, ...props }) => {
  return (
    <SessionContext.Provider value={{ ...props }}>
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SessionContext, SessionProvider };
