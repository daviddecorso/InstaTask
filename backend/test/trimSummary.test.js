const { trimSummary } = require("../src/trimSummary");

test("Summary 1", () => {
  expect(trimSummary("Weekly Quiz 1 [COP4331C_CMB-21Spring 00038]")).toBe(
    "Weekly Quiz 1"
  );
});

test("Summary 2", () => {
  expect(trimSummary("Chapter 3 [ENC3241-21Spring 0W60]")).toBe("Chapter 3");
});

test("Summary 3", () => {
  expect(
    trimSummary("COP4331C_CMB-21Spring 00038 [COP4331C_CMB-21Spring 00038]")
  ).toBe("COP4331C_CMB-21Spring 00038");
});

test("Summary 4", () => {
  expect(trimSummary("CAP4630-21Spring 0V01 [CAP4630-21Spring 0V01]")).toBe(
    "CAP4630-21Spring 0V01"
  );
});

test("Extra brackets", () => {
  expect(
    trimSummary(" hi this [is test] data!! [COP4331C_CMB-21Spring 00038]")
  ).toBe(" hi this [is test] data!!");
});

test("No class", () => {
  expect(
    trimSummary(
      "Myth-Buster Acknowledgement Quiz [2021 COVID-19 Spring Training Module 01]"
    )
  ).toBe("Myth-Buster Acknowledgement Quiz");
});

test("Garbage data", () => {
  expect(trimSummary("goueihwoiuwh goweo hgow egoiwe ghowi")).toBe(
    "goueihwoiuwh goweo hgow egoiwe ghowi"
  );
});
