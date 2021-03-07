const { canvasUrlToLink } = require("../src/canvasUrlToLink");

// Tests the url parser on a quiz link
test("test quiz link", () => {
  expect(
    canvasUrlToLink(
      "https://webcourses.ucf.edu/calendar?include_contexts=course_1369388&month=02&year=2021#assignment_6864815",
      false
    )
  ).toBe("https://webcourses.ucf.edu/courses/1369388/assignments/6864815");
});

// Tests the url parser on an assignment link
test("test assignment link", () => {
  expect(
    canvasUrlToLink(
      "https://webcourses.ucf.edu/calendar?include_contexts=course_1369388&month=02&year=2021#assignment_6864826",
      false
    )
  ).toBe("https://webcourses.ucf.edu/courses/1369388/assignments/6864826");
});

// Tests the url parser on a zoom link
test("test assignment link", () => {
  expect(
    canvasUrlToLink(
      "https://webcourses.ucf.edu/calendar?include_contexts=course_1369388&month=02&year=2021#calendar_event_2178305",
      true
    )
  ).toBe("https://webcourses.ucf.edu/courses/1369388/calendar_events/2178305");
});
