/**
 * Toggles the boolean value of 'complete' of an event with a given
 * user id (uid) and event id (eid)
 * @param {String} uid
 * @param {String} eid
 */
async function toggleComplete(uid, eid) {
  let userModel = require("../models/user.model.js");
  var user = await userModel
    .findById(uid)
    .catch((err) => console.log("Error: " + err));

  var event = user.calendar.events.id(eid);
  event.complete = !event.complete;
  user
    .save()
    .then(() => console.log("Successfully set complete to " + event.complete));
}
module.exports = { toggleComplete };
