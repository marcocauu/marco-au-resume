import React from "react";
import { render } from "@testing-library/react";

import { SessionProvider } from "./SessionProvider";

describe("SessionProvider", () => {
  it("renders", () => {
    const wrapper = render(<SessionProvider />);
  });

  it("renders children", () => {
    const { queryByText } = render(
      <SessionProvider>
        <p>Test</p>
      </SessionProvider>
    );
    expect(queryByText("Test")).toBeTruthy();
  });
});
