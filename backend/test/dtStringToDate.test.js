const { dtStringToDate } = require("../src/dtStringToDate");

// Test a value from DTSTART
test("DTSTART parse test", () => {
  expect(dtStringToDate("20210204T223000Z")).toStrictEqual(
    new Date("February 4, 2021 22:30:00")
  );
});

// Tests a value from DTSTAMP
test("DTSTAMP parse test", () => {
  expect(dtStringToDate("20210112T234100Z")).toStrictEqual(
    new Date("January 12, 2021 23:41:00")
  );
});

// Tests an invalid date
test("Invalid data impossible date", () => {
  expect(dtStringToDate("202101122T234100Z")).toBe(false);
});

// Tests a string
test("Invalid data non-date string", () => {
  expect(dtStringToDate("garbage string")).toBe(false);
});
