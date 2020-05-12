import React from "react";

import { DivCentered, H1Centered } from "../../common";
import { Description, Image } from "./components";

const AboutMeDescription = () => {
  return (
    <DivCentered height={100}>
      <Description />
      <Image />
    </DivCentered>
  );
};

export { AboutMeDescription };
