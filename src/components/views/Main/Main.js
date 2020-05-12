import React, { useContext } from "react";

import {
  ParallaxProvider,
  SessionContext,
  ThemeProvider,
} from "../../providers";
import { Body } from "../Body";
import { Intro } from "../Intro";
import { AboutMe } from "../AboutMe";
import { AboutMeDescription } from "../AboutMeDescription";
import { Banner } from "../Banner";

const Main = () => {
  const { language, theme } = useContext(SessionContext);
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Body>
          <Intro />
          <AboutMe />
          <AboutMeDescription />
          <Banner imageSrc={language.images.vancouver} height={50} />
        </Body>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export { Main };
