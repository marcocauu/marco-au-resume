import React from "react";
import { render } from "@testing-library/react";

import { ParallaxProvider } from "../../providers";
import { Banner } from "./Banner";

describe("Banner", () => {
  it("should render", () => {
    const wrapper = render(
      <ParallaxProvider>
        <Banner imageSrc={"google.com"} />
      </ParallaxProvider>
    );
  });
});
