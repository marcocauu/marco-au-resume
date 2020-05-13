import React, { useContext } from "react";

import { DivCentered } from "../../common";
import { Description, Image } from "./components";
import { SessionContext } from "../../providers";

const AboutMeDescription = () => {
  const { language, basename } = useContext(SessionContext);
  return (
    <DivCentered height={100}>
      <Description description={language.description} />
      <Image text={language.kenting} path={`${basename}/images/kenting.jpg`} />
    </DivCentered>
  );
};

export { AboutMeDescription };
