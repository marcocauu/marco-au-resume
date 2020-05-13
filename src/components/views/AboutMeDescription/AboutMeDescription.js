import React, { useContext } from "react";

import { DivCentered, Description, Image } from "../../common";
import { SessionContext } from "../../providers";

const AboutMeDescription = () => {
  const { language, basename } = useContext(SessionContext);
  return (
    <DivCentered height={100}>
      <Description description={language.description} width={"60%"} />
      <Image text={language.kenting} path={`${basename}/images/kenting.jpg`} />
    </DivCentered>
  );
};

export { AboutMeDescription };
