import React from "react";

import { SessionProvider } from "./providers";
import { Router } from "./views";
import "../App.css";

const App = ({ basename }) => {
  return (
    <SessionProvider basename={basename}>
      <Router />
    </SessionProvider>
  );
};

export { App };
