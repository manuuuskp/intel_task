import { calculateStyle } from "./CircleProgress.helpers";

describe("Circle Progress Helpers", () => {
  it("returns value min range", () => {
    const [dashArray, dashOffset, radius] = calculateStyle(200, 5, 1, 10);

    expect(dashArray).toBe(408.4070449666731);
    expect(dashOffset).toBe(367.5663404700058);
    expect(radius).toBe(65);
  });

  it("returns value max range", () => {
    const [dashArray, dashOffset, radius] = calculateStyle(200, 5, 10, 10);
    console.log(dashArray, dashOffset);
    expect(dashArray).toBe(408.4070449666731);
    expect(dashOffset).toBe(0);
    expect(radius).toBe(65);
  });
});
