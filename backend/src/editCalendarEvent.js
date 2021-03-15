/**
 * Edits the values of an event within
 * the user calendar events array
 * @param {String} uid _id of the user
 * @param {String} eid _id of the event to edit
 * @param {Object} newEvent new event object with all values set to null unless modified
 */
async function editCalendarEvent(uid, eid, newEvent) {
  let userModel = require("../models/user.model.js");
  var user = await userModel
    .findById(uid)
    .catch((err) => console.log("Error: " + err));

  var event = user.calendar.events.id(eid);
  if (newEvent.dtstart != null) event.dtstart = newEvent.dtstart;
  if (newEvent.dtend != null) event.dtend = newEvent.dtend;
  if (newEvent.desc != null) event.desc = newEvent.desc;
  if (newEvent.location != null) event.location = newEvent.location;
  if (newEvent.sequence != null) event.sequence = newEvent.sequence;
  if (newEvent.url != null) event.url = newEvent.url;
  if (newEvent.summary != null) event.summary = newEvent.summary;
  if (newEvent.course != null) event.course = newEvent.course;
  user
    .save()
    .then(() => console.log("Successfully edited event."))
    .catch((err) => console.log("Error: " + err));
}
module.exports = { editCalendarEvent };
