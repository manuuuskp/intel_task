export const calculateStyle = (circleWidth, strokeWidth, range, maxRange) => {
  const radius = (circleWidth - strokeWidth) / 3;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray - (dashArray * range) / maxRange;

  return [dashArray, dashOffset, radius];
};
