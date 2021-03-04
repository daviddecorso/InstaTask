/**
 * Takes the URL canvas provides for the user calendar
 * and parses objects for all events from it.
 * Returns an array containing all events from the given calendar
 * as objects with event data contained within.
 * @param {String} link
 */
async function parseICS(link) {
  const ical = require("node-ical");
  const { canvasUrlToLink } = require("../src/canvasUrlToLink");
  const { dtStringToDate } = require("../src/dtStringToDate");
  const { trimSummary } = require("../src/trimSummary");

  var eventList = [];
  let events = await ical.async.fromURL(link);
  for (let d in events) {
    if (events.hasOwnProperty(d)) {
      if (events[d].type == "VEVENT") {
        eventObj = {
          dtstamp: events[d].dtstamp,
          uid: events[d].uid,
          dtstart: events[d].start,
          dtend: events[d].end,
          desc: events[d].description,
          location: events[d].location,
          sequence: events[d].sequence,
          summary: trimSummary(events[d].summary),
          url: canvasUrlToLink(events[d].url),
          complete: events[d].completed,
          hasAlerts: events[d].hasAlerts,
          alerts: events[d].alerts,
        };
        eventList.push(eventObj);
      }
    }
  }
  return eventList;
}
module.exports = { parseICS };
