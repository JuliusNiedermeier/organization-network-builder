export const makeDraggable = (element: HTMLDivElement) => {
  let start = { mouse: { x: 0, y: 0 }, scroll: { left: 0, top: 0 } };

  const handleMouseDown = (e: MouseEvent) => {
    // e.preventDefault();
    start = {
      mouse: { x: e.x, y: e.y },
      scroll: { left: element.scrollLeft, top: element.scrollTop },
    };
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("mouseleave", handleMouseLeave);
  };

  const handleMouseMove = (e: MouseEvent) => {
    // e.preventDefault();
    element.scrollLeft = start.scroll.left - (e.x - start.mouse.x);
    element.scrollTop = start.scroll.top - (e.y - start.mouse.y);
  };

  const handleMouseUp = () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseup", handleMouseUp);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };

  const handleMouseLeave = () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseup", handleMouseUp);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };

  element.addEventListener("mousedown", handleMouseDown);

  return () => {
    element.removeEventListener("mousedown", handleMouseDown);
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseup", handleMouseUp);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
