/**
 * Inserts an event object into the user.calendar.events array
 * and uploads to database
 * @param {String} id
 * @param {Object} event
 */

async function addCalendarEvent(id, event) {
  let userModel = require("../models/user.model.js");
  var user = await userModel
    .findById(id)
    .catch((err) => console.log("Error: " + err));
  user.calendar.events.push(event);
  await user
    .save()
    .then(() => console.log("Successfully added event to calendar."))
    .catch((err) => console.log("Error: " + err));
}
module.exports = { addCalendarEvent };
