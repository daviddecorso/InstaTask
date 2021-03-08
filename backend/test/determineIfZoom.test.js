const { determineIfZoom } = require("../src/determineIfZoom");

test("Is a Zoom event", () => {
  expect(determineIfZoom("Zoom Online Meting")).toBe(true);
});

test("Isn't a Zoom event", () => {
  expect(determineIfZoom("Something else")).toBe(false);
});

test("Null location", () => {
  expect(determineIfZoom(null)).toBe(false);
});
