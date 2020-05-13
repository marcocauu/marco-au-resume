import React from "react";
import { render } from "@testing-library/react";

import { Icon } from "./Icon";

describe("Icon", () => {
  it("should render", () => {
    const wrapper = render(<Icon iconLink="google.com" />);
  });
});
