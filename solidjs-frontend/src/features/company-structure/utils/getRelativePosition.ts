export const getRelativePosition = (
  el: HTMLElement,
  container: HTMLElement
) => {
  const elRect = el.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    width: elRect.width,
    height: elRect.height,
    left: elRect.left - containerRect.left,
    x: elRect.left - containerRect.left,
    top: elRect.top - containerRect.top,
    y: elRect.top - containerRect.top,
    bottom: elRect.bottom - containerRect.top,
    right: elRect.right - containerRect.left,
  };
};
