import React from "react";
import { render } from "@testing-library/react";

import { SessionProvider } from "./SessionProvider";

describe("SessionProvider", () => {
  it("renders", () => {
    const { queryByText } = render(<SessionProvider>test</SessionProvider>);
    expect(queryByText("test")).toBeTruthy();
  });
});
