import React, { useContext } from "react";

import { ParallaxProvider, SessionContext } from "../../providers";
import { Body } from "../Body";
import { Intro } from "../Intro";
import { HeaderSeparator } from "../HeaderSeparator";
import { AboutMeDescription } from "../AboutMeDescription";
import { Banner } from "../Banner";
import { SkillsEducation } from "../SkillsEducation";
import { Experience } from "../Experience";
import { ContactMe } from "../ContactMe";

const Main = () => {
  const { language } = useContext(SessionContext);
  return (
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
        <HeaderSeparator headerText={language.experience} darkMode />
        <Experience experienceList={language.experienceList} />
        <HeaderSeparator headerText={language.contact} />
        <ContactMe />
      </Body>
    </ParallaxProvider>
  );
};

export { Main };
