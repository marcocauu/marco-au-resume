import React from "react";

import { ParallaxProvider } from "../../providers";
import { Body } from "../Body";
import { Intro } from "../Intro";
import { AboutMeDescription } from "../AboutMeDescription";
import { Banner } from "../Banner";
import { SkillsEducation } from "../SkillsEducation";
import { Experience } from "../Experience";
import { ContactMe } from "../ContactMe";
import images from "../../../resources/images/images.json";

const Main = () => (
  <ParallaxProvider>
    <Body>
      <Intro />
      <AboutMeDescription />
      <Banner imageSrc={images.vancouver} height={50} />
      <SkillsEducation />
      <Experience />
      <ContactMe />
    </Body>
  </ParallaxProvider>
);

export { Main };
