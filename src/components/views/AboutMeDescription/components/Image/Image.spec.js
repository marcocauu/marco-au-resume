import React from "react";
import { render } from "@testing-library/react";

import { Image } from "./Image";
import { SessionProvider } from "../../../../providers";
import language from "../../../../../resources/language/en.json";

describe("Image", () => {
  it("should render", () => {
    const { queryByText } = render(
      <SessionProvider language={language} basename={""}>
        <Image />
      </SessionProvider>
    );
    expect(queryByText(language.kenting)).toBeTruthy();
  });
});
