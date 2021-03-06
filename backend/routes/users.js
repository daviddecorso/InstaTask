const router = require("express").Router();
let userModel = require("../models/user.model.js");
const { parseICS } = require("../src/parseICS.js");
const { updateCalendar } = require("../src/updateCalendar.js");

router.route("/").get((req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/events/").get((req, res) => {
  userModel
    .findById(req.user._id)
    .then((user) => res.json(user.calendar.events))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const displayName = req.body.displayName;
  const calendarLink = req.body.calendarLink;
  const newUser = new userModel({
    id: id,
    displayName: displayName,
    calendarLink: calendarLink,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/calendar").put((req, res) => {
  const id = req.body.user._id;
  const calendarLink = req.body.calendarLink;
  let eventList = async () => {
    return await parseICS(calendarLink).then((list) => {
      return list;
    });
  };
  let tempList = eventList();
  userModel
    .findByIdAndUpdate(id, { calendarLink: calendarLink })
    .then(() => {
      res.status(200).json("Successfully updated link");
      tempList
        .then((list) => updateCalendar(id, list))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .then(() => {
      res.send(req.body.user);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
