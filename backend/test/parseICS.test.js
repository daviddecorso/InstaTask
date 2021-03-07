const { parseICS } = require("../src/parseICS");
const { canvasUrlToLink } = require("../src/canvasUrlToLink");

// Tests valid link
test("Parse test valid link", async () => {
  const data = await parseICS(
    "https://webcourses.ucf.edu/feeds/calendars/user_9bYEpCybgihDdcDbwk9i3BkDEa7DgU8AEGdlTRFO.ics"
  );
  expect(data[0].uid).toBe("event-assignment-6908421");
  expect(data[0].desc).toBe(
    "[HW2] (https://webcourses.ucf.edu/courses/1374948/files/83776906/download?wrap=1)"
  );
  expect(data[0].sequence).toBe("0");
  expect(data[0].summary).toBe("HW2 ");
  expect(data[0].course).toBe("COP4020");
  expect(data[0].url).toBe(
    "https://webcourses.ucf.edu/courses/1374948/assignments/6908421"
  );
  expect(data[0].dtstart).toStrictEqual(new Date("2021-02-05T05:00:00.000Z"));
  expect(data[0].dtend).toStrictEqual(new Date("2021-02-05T05:00:00.000Z"));
  expect(data[0].isZoom).toBe(false);
});
