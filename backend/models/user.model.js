const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  dtstamp: { type: Date, required: true },
  uid: { type: String, required: true },
  dtstart: { type: Date, required: true },
  dtend: { type: Date, required: false },
  desc: { type: String, required: false },
  location: { type: String, required: false },
  sequence: { type: Number, required: true },
  summary: { type: String, required: true },
  url: { type: String, required: false },
  complete: { type: Boolean, required: true, default: false },
  hasAlerts: { type: Boolean, required: true, default: false },
  alerts: [Number],
});

const userSchema = new Schema(
  {
    id: { type: String, required: true },
    displayName: { type: String, required: true },
    calendarLink: { type: String, required: false },
    calendar: {
      defaultAlertTime: { type: Number, required: true, default: 24 },
      events: [eventSchema],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
