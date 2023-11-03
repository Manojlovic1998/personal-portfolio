export const getMousePos = (event: MouseEvent | TouchEvent) => {
  if ("touches" in event) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  }

  return {
    x: event.clientX,
    y: event.clientY,
  };
};

/**
 *  Checks the top half of the target element, the bottom half, left half, and right half.
 *  It determines in which half of the element the mouse is located, in percentage.
 *  The percentage is calculated from the center and the edges of the element.
 *  Once the percentage is calculated, it returns the percentage of the degrees limit.
 *
 * Example:
 *  Function can determine your mouse is 75% right and 50% up, and return 75% of the degree limit on
 *  the x axis and 50% of the degree limit on the y axis. Same for left and right.
 *
 *
 * @param x
 * @param y
 * @param degreeLimit
 * @param target
 *
 * @returns {x: number, y: number}
 */
export const getMouseDegrees = (
  x: number,
  y: number,
  degreeLimit: number,
  target: HTMLElement,
) => {
  let dx = 0;
  let dy = 0;
  let xdiff = 0;
  let xPercentage = 0;
  let ydiff = 0;
  let yPercentage = 0;

  const { x: targetXBounding, y: targetYBounding } =
    target.getBoundingClientRect();

  let wTarget = { x: target.clientWidth, y: target.clientHeight };

  // Left (Rotates left between 0 and -degreesLimit)
  // 1. If cursor is in the left half of screen
  if (x <= targetXBounding + wTarget.x / 2) {
    // 2. Get the difference between middle of screen and cursor position
    xdiff = targetXBounding + wTarget.x / 2 - x;
    // 3. Find the percentage of that difference (percentage toward edge of screen)
    xPercentage = (xdiff / (targetXBounding + wTarget.x / 2)) * 100;
    // 4. Convert that to a percentage of the maximum rotation we allow for the neck
    dx = ((degreeLimit * xPercentage) / 100) * -1;
  }

  // Right (Rotates right between 0 and degreeLimit)
  if (x >= targetXBounding + wTarget.x / 2) {
    xdiff = x - (targetXBounding + wTarget.x / 2);

    xPercentage = (xdiff / (targetXBounding + wTarget.x / 2)) * 100;
    dx = (degreeLimit * xPercentage) / 100;
  }

  // Up (Rotates up between 0 and -degreeLimit)
  if (y <= targetYBounding + wTarget.y / 2) {
    ydiff = targetYBounding + wTarget.y / 2 - y;

    yPercentage = (ydiff / (targetYBounding + wTarget.y / 2)) * 100;
    // Note that I cut degreeLimit in half when she looks up
    dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1;
  }

  // Down (Rotates down between 0 and degreeLimit)
  if (y >= targetYBounding + wTarget.y / 2) {
    ydiff = y - (targetYBounding + wTarget.y / 2);
    yPercentage = (ydiff / (targetYBounding + wTarget.y / 2)) * 100;
    dy = (degreeLimit * yPercentage) / 100;
  }

  return { x: dx, y: dy };
};
