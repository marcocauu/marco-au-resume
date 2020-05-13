import React from "react";
import { render } from "@testing-library/react";

import { ContactMe } from "./ContactMe";
import { SessionProvider } from "../../providers";
import language from "../../../resources/language/en.json";

describe("ContactMe", () => {
  it("should render", () => {
    const wrapper = render(
      <SessionProvider language={language}>
        <ContactMe />
      </SessionProvider>
    );
  });
});
