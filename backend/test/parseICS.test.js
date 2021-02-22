const { parseICS } = require("../src/parseICS");
const { canvasUrlToLink } = require("../src/canvasUrlToLink");

// Tests valid link
test("Parse test valid link", async () => {
  const data = await parseICS(
    "https://webcourses.ucf.edu/feeds/calendars/user_9bYEpCybgihDdcDbwk9i3BkDEa7DgU8AEGdlTRFO.ics"
  );
  expect(data[0].uid).toBe("event-assignment-6864819");
  expect(data[0].desc).toBe(
    "This quiz covers material from the assigned videos on Agile. See the [Course Schedule] (https://webcourses.ucf.edu/courses/1369388/pages/course-schedule) for the specific video links."
  );
  expect(data[0].sequence).toBe("0");
  expect(data[0].summary).toBe("COP4331C");
  expect(data[0].url).toBe(
    canvasUrlToLink(
      "https://webcourses.ucf.edu/calendar?include_contexts=course_1369388&month=01&year=2021#assignment_6864819"
    )
  );
});
