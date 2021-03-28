const router = require("express").Router();
let userModel = require("../models/user.model.js");
const { addCalendarEvent } = require("../src/addCalendarEvent.js");
const { deleteCalendarEvent } = require("../src/deleteCalendarEvent.js");
const { toggleHidden } = require("../src/toggleHidden.js");
const { editCalendarEvent } = require("../src/editCalendarEvent.js");
const { toggleComplete } = require("../src/toggleComplete.js");
const { updateCalendar } = require("../src/updateCalendar.js");
const { parseICS } = require("../src/parseICS.js");

router.route("/:id").get((req, res) => {
  userModel
    .findById(req.params.id)
    .then((user) => res.status(200).json(user.calendar.events))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.uid;
  const newEvent = req.body.event;
  addCalendarEvent(id, newEvent)
    .then(() => res.status(200).json("Successfully added event"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete").put((req, res) => {
  const id = req.body.uid;
  const eid = req.body.eid;
  deleteCalendarEvent(id, eid)
    .then(() => res.status(200).json("Successfully deleted event"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update").put((req, res) => {
  let id = req.body.id;
  let calendarLink = req.body.calendarLink;
  let eventList = async () => {
    return await parseICS(calendarLink).then((list) => {
      return list;
    });
  };
  let tempList = eventList();
  tempList
    .then((list) => updateCalendar(id, list))
    .then(() => res.status(200).json("Successfully updated calendar"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/toggleHidden").put((req, res) => {
  const uid = req.body.uid;
  const eid = req.body.eid;
  toggleHidden(uid, eid)
    .then(() => res.status(200).json("Successfully toggled hidden"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/toggleComplete").put((req, res) => {
  const uid = req.body.uid;
  const eid = req.body.eid;
  toggleComplete(uid, eid)
    .then(() => res.status(200).json("Successfully toggled complete"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit").put((req, res) => {
  const uid = req.body.uid;
  const eid = req.body.eid;
  const newEvent = req.body.newEvent;
  editCalendarEvent(uid, eid, newEvent)
    .then(() => res.status(200).json("Successfully edited event"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
