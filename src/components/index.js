import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Main } from "./Main";
import "../App.css";

const App = ({ basename }) => {
  return (
    <Router basename={basename}>
      <Route exact path={"/"} component={Main} />
    </Router>
  );
};

export { App };
