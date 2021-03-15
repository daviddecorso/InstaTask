/**
 * Toggles the boolean value of 'hidden' of an event with a given
 * user id (uid) and event id (eid)
 * @param {String} uid
 * @param {String} eid
 */
async function toggleHidden(uid, eid) {
  let userModel = require("../models/user.model.js");
  var user = await userModel
    .findById(uid)
    .catch((err) => console.log("Error: " + err));

  var event = user.calendar.events.id(eid);
  event.hidden = !event.hidden;
  user
    .save()
    .then(() => console.log("Successfully set hidden to " + event.hidden));
}
module.exports = { toggleHidden };
