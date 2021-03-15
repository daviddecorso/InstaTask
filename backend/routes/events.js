const router = require("express").Router();
let userModel = require("../models/user.model.js");
const { addCalendarEvent } = require("../src/addCalendarEvent.js");
const { deleteCalendarEvent } = require("../src/deleteCalendarEvent.js");
const { toggleHidden } = require("../src/toggleHidden.js");
const { editCalendarEvent } = require("../src/editCalendarEvent.js");
const { toggleComplete } = require("../src/toggleComplete.js");
const { updateCalendar } = require("../src/updateCalendar.js");

router.route("/:id").get((req, res) => {
  userModel
    .findById(req.params.id)
    .then((user) => res.json(user.calendar.events))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.uid;
  const newEvent = req.body.event;
  addCalendarEvent(id, newEvent).catch((err) => console.log("Error: " + err));
});

router.route("/delete").put((req, res) => {
  const id = req.body.uid;
  const eid = req.body.eid;
  deleteCalendarEvent(id, eid).catch((err) => console.log("Error: " + err));
});

router.route("/update").put((req, res) => {
  const id = req.user._id;
  const calendarLink = req.user.calendarLink;
  let eventList = async () => {
    return await parseICS(calendarLink).then((list) => {
      return list;
    });
  };
  let tempList = eventList();
  tempList
    .then((list) => updateCalendar(id, list))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/toggleHidden").put((req, res) => {
  const uid = req.body.uid;
  const eid = req.body.eid;
  toggleHidden(uid, eid)
    .then(() => res.json("Success"))
    .catch((err) => console.log("Error: " + err));
});

router.route("/toggleComplete").put((req, res) => {
  const uid = req.body.uid;
  const eid = req.body.eid;
  toggleComplete(uid, eid)
    .then(() => res.json("Success"))
    .catch((err) => console.log("Error: " + err));
});

router.route("/edit").put((req, res) => {
  const uid = req.body.uid;
  const eid = req.body.eid;
  const newEvent = req.body.newEvent;
  editCalendarEvent(uid, eid, newEvent)
    .then(() => res.json("Success"))
    .catch((err) => console.log("Error: " + err));
});
module.exports = router;
