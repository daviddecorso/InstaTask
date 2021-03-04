/**
 * Inserts event array from parseICS to calendar in database.
 * Currently overwrites calendar every time.
 * @param {String} id
 * @param {Array} eventList
 */

async function populateCalendar(id, eventList) {
  let userModel = require("../models/user.model.js");
  var user = await userModel
    .findById(id)
    .catch((err) => console.log("Error: " + err));
  user.calendar.events = eventList;
  await user
    .save()
    .then(() => console.log("Successfully updated calendar."))
    .catch((err) => console.log("Error: " + err));
}
module.exports = { populateCalendar };
