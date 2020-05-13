import { windowOpen } from "./windowOpen";

describe("windowOpen", () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it("should call window.open", () => {
    const windowOpenFnc = windowOpen("google.com");
    windowOpenFnc();
    expect(window.open).toHaveBeenCalled();
  });
});
