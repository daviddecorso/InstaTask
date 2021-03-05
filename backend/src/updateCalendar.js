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
  var newEventIds = [];
  // I do a lot of looping and copying because I was just trying to get stuff to work correctly.
  // There is almost certainly some optimization that can be done here.
  for (const entry of entriesUser) {
    oldEventIds.push(entry[1].uid);
  }

  for (const entry of entries) {
    if (!oldEventIds.includes(entry[1].uid)) newEventIds.push(entry[1]);
  }

  for (const item of newEventIds) {
    user.calendar.events.push(item);
  }
  await user
    .save()
    .then(() => console.log("Successfully updated calendar."))
    .catch((err) => console.log("Error: " + err));
}
module.exports = { updateCalendar };
