import { scrollToTop } from "./scrollToTop";

describe("scrollToTop", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });
  it("should call window.scrollTo", () => {
    const newScrollToFnc = scrollToTop();
    newScrollToFnc();
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
});
