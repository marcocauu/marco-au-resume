import React, { useContext } from "react";

import { Description, Image, Section } from "../../common";
import { SessionContext } from "../../providers";

const AboutMeDescription = () => {
  const { language, basename } = useContext(SessionContext);
  return (
    <Section headerText={language.aboutMe} contentHeight={100}>
      <Description description={language.description} />
      <Image text={language.kenting} path={`${basename}/images/kenting.jpg`} />
    </Section>
  );
};

export { AboutMeDescription };
