const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: { type: String, required: true },
    displayName: { type: String, required: true },
    calendarLink: { type: String, required: false },

    calendar: [
      {
        defaultAlertTime: { type: Number, required: true, default: 24 },
        events: [
          {
            dtstamp: { type: Date, required: true }, // string?
            uid: { type: String, required: true },
            dtstart: { type: Date, required: true },
            dtend: { type: Date, required: false },
            desc: { type: String, required: false },
            location: { type: String, required: false },
            sequence: { type: Number, required: true },
            summary: { type: String, required: true },
            complete: { type: Boolean, required: true },
            hasAlerts: { type: Boolean, required: true },
            alerts: [Number],
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
