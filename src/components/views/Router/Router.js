import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "../Main";
import { SessionContext } from "../../providers";

const Router = () => {
  const { basename } = useContext(SessionContext);
  return (
    <BrowserRouter basename={basename}>
      <Route exact path={"/"} component={Main} />
    </BrowserRouter>
  );
};

export { Router };
