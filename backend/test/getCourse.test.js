const { getCourse } = require("../src/getCourse");

test("Course 1", () => {
  expect(getCourse("Weekly Quiz 1 [COP4331C_CMB-21Spring 00038]")).toBe(
    "COP4331C"
  );
});

test("Course 2", () => {
  expect(getCourse("Chapter 3 [ENC3241-21Spring 0W60]")).toBe("ENC3241");
});

test("No class", () => {
  expect(
    getCourse(
      "Myth-Buster Acknowledgement Quiz [2021 COVID-19 Spring Training Module 01]"
    )
  ).toBe("No class");
});
