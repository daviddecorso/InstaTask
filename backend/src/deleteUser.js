/**
 * Deletes a user from the database given an _id
 * @param {String} id // user _id
 */
async function deleteUser(id) {
  let userModel = require("../models/user.model.js");
  userModel
    .deleteOne({ _id: id })
    .then(() => console.log("Successfully deleted user from database."))
    .catch((err) => console.log("Error: " + err));
}
module.exports = { deleteUser };
