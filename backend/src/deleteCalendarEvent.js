/**
 * Deletes an event object from the user.calendar.events array
 * based on a given user id and event uid.
 * @param {String} id
 * @param {String} eventId
 */
async function deleteCalendarEvent(id, eventId) {
  let userModel = require("../models/user.model.js");
  userModel
    .findByIdAndUpdate(
      id,
      { $pull: { "calendar.events": { uid: eventId } } },
      { safe: true, upsert: true }
    )
    .then(() => console.log("Successfully deleted event from calendar."))
    .catch((err) => console.log("Error: " + err));
}
module.exports = { deleteCalendarEvent };
