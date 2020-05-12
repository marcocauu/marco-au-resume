import React, { useContext } from "react";

import {
  ParallaxProvider,
  SessionContext,
  ThemeProvider,
} from "../../providers";
import { Body } from "../Body";
import { Intro } from "../Intro";
import { HeaderSeparator } from "../HeaderSeparator";
import { AboutMeDescription } from "../AboutMeDescription";
import { Banner } from "../Banner";
import { SkillsEducation } from "../SkillsEducation";

const Main = () => {
  const { language, theme } = useContext(SessionContext);
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Body>
          <Intro />
          <HeaderSeparator headerText={language.aboutMe} />
          <AboutMeDescription />
          <Banner
            imageSrc={
              "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/74b15967880779.5b49323a6f93d.jpg"
            }
            height={50}
          />
          <HeaderSeparator headerText={language.skillsEducation} darkMode />
          <SkillsEducation />
        </Body>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export { Main };
