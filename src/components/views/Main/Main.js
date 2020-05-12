import React, { useContext } from "react";

import {
  ParallaxProvider,
  SessionContext,
  ThemeProvider,
} from "../../providers";
import { Banner } from "../Banner";
import { Body } from "../Body";
import { Intro } from "../Intro";

const Main = () => {
  const { language, theme } = useContext(SessionContext);
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Body>
          <Intro />
          <Banner imageSrc={language.images.vancouver} />
        </Body>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export { Main };
