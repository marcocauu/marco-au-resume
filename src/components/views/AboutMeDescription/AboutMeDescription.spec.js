import React from "react";
import { render } from "@testing-library/react";

import { AboutMeDescription } from "./AboutMeDescription";
import { SessionProvider } from "../../providers";
import language from "../../../resources/language/en.json";

describe("Description", () => {
  it("should render", () => {
    const wrapper = render(
      <SessionProvider language={language} basename={""}>
        <AboutMeDescription />
      </SessionProvider>
    );
  });
});
