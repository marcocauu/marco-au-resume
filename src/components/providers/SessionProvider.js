import React from "react";

const SessionContext = React.createContext({});

const SessionProvider = ({ children, ...props }) => {
  return (
    <SessionContext.Provider value={{ ...props }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
