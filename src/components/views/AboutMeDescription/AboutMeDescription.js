import React from "react";

import { DivCentered } from "../../common";
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
