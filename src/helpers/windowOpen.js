export const windowOpen = (link, isTargetBlank = false) => () => {
  window.open(link, isTargetBlank ? "_blank" : "");
};
