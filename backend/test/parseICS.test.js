const { parseICS } = require("../src/parseICS");

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
  expect(data[0].summary).toBe("Weekly Quiz 1 [COP4331C_CMB-21Spring 00038]");
});
