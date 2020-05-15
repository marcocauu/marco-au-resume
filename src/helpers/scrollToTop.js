// Factory function for creating functions for window.scrollTo
export const scrollToTop = (top = 0, behavior = "smooth") => () =>
  window.scrollTo({ top, behavior });
