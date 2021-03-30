/**
 * Updates the calendar of user with given id and .ics link.
 * Does not overwrite existing events and only uploads new events to database.
 * @param {String} id
 * @param {Array} eventList
 */
async function updateCalendar(id, eventList) {
  let userModel = require("../models/user.model.js");
  var user = await userModel
    .findById(id)
    .catch((err) => console.log("Error: " + err));

  const entries = eventList.entries();
  const entriesUser = user.calendar.events.entries();
  var oldEventIds = [];

  // There is almost certainly some optimization that can be done here.
  for (const entry of entriesUser) {
    oldEventIds.push(entry[1].uid);
  }

  for (let entry of entries) {
    if (!oldEventIds.includes(entry[1].uid)) {
      date = entry[1].dtstart;
      entry[1].dtstart = new Date(date);
      if (entry[1].dtend == null) entry[1].dtend = entry[1].dtstart;
      else {
        date = entry[1].dtend;
        entry[1].dtend = new Date(date);
      }
      user.calendar.events.push(entry[1]);
    }
  }

  await user
    .save()
    .then(() => console.log("Successfully updated calendar."))
    .catch((err) => console.log("Error: " + err));
}
module.exports = { updateCalendar };
