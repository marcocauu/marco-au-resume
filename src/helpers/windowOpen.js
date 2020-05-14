// Factory function for creating functions for window.open
export const windowOpen = (link, isTargetBlank = false) => () => {
  window.open(link, isTargetBlank ? "_blank" : "");
};
