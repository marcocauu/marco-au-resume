import React from "react";
import { render } from "@testing-library/react";

import { Image } from "./Image";
import language from "../../../../../resources/language/en.json";

describe("Image", () => {
  it("should render", () => {
    const { queryByText } = render(<Image text={language.kenting} path={""} />);
    expect(queryByText(language.kenting)).toBeTruthy();
  });
});
