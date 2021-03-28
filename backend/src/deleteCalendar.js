/**
 * Deletes a user's entire calendar from the database given an _id
 * @param {String} id // user _id
 */
async function deleteCalendar(id) {
  let userModel = require("../models/user.model.js");
  userModel
    .findByIdAndUpdate(
      id,
      { $set: { "calendar.events": [] } },
      { safe: true, upsert: true }
    )
    .then(() => console.log("Successfully deleted user from database."))
    .catch((err) => console.log("Error: " + err));
}
module.exports = { deleteCalendar };
