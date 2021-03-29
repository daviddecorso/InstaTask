const router = require("express").Router();
let userModel = require("../models/user.model.js");
const { parseICS } = require("../src/parseICS.js");
const { updateCalendar } = require("../src/updateCalendar.js");
const webpush = require("web-push");

router.route("/").get((req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
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
    .then(() => res.status(200).json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/calendar").put((req, res) => {
  const id = req.body.id;
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
        .then((res) =>
          res.status(200).json("Successfully updated calendar link")
        )
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

webpush.setVapidDetails(
  process.env.WEB_PUSH_CONTACT,
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY
);

router.route("/subscribe").post((req, res) => {
  const subscription = req.body;

  const payload = JSON.stringify({
    title: "Hello!",
    body: "It works.",
  });

  webpush
    .sendNotification(subscription, payload)
    .then((result) => console.log(result))
    .catch((e) => console.log(e.stack));

  res.status(200).json({ success: true });
});

module.exports = router;
