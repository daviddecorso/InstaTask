const router = require("express").Router();
let userModel = require("../models/user.model.js");

router.route("/").get((req, res) => {
    userModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const id = req.body.id;
    const displayName = req.body.displayName;
    const calendarLink = req.body.calendarLink;
    const newUser = new userModel({id:id, displayName:displayName, calendarLink:calendarLink});

    newUser.save()
        .then(() => res.json("User added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;