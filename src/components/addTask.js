import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTask({ user }) {
  // Style for Add Task Button
  const buttonStyle = {
    backgroundColor: "#062751",
    borderColor: "rgba(0, 0, 0, 0)",
    outline: "none",
    color: "white",
    marginTop: 20,
  };
  toast.configure();
  const success = () =>
    toast.info("Successfuly Added Event: " + eventName.value);

  let maxDate = new Date(2022, 12, 30);
  const dateStamp = Date();

  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dateStamp);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const newEvent = {
      uid: user._id,
      dtstamp: dateStamp,
      dtstart: selectedDate,
      desc: eventDescription.value,
      sequence: 0,
      summary: eventName.value,
      complete: false,
      dtend: selectedDate,
    };

    /* Sending to backend */
    axios.post("http://localhost:5000/events/add", {
      uid: user._id,
      event: newEvent,
    });

    // Sends Toast
    success();

    // close modal after handling submit
    modal.classList.remove("is-active");
  };

  const modal = document.getElementById("modal");
  const eventName = document.getElementById("eventname");
  const eventDescription = document.getElementById("eventdescription");

  var onClick = () => {
    modal.classList.add("is-active");
  };

  const onClickExit = () => {
    modal.classList.remove("is-active");
  };

  return (
    <div>
      <div className="has-text-centered">
        <button onClick={onClick} className="button is-primary" id="addTask">
          Add Task
        </button>
      </div>
      <div className="modal" className="modal" id="modal">
        <div
          className="modal-background"
          id="modalbg"
          onClick={onClickExit}
        ></div>
        <div className="modal-card ">
          <header
            className="modal-card-head"
            style={{ backgroundColor: "transparent", outline: "none" }}
          >
            <h3 className="title mb-6">
              New Event Information
              <button
                className="delete is-large"
                aria-label="close"
                onClick={onClickExit}
                style={{ marginLeft: 225 }}
              ></button>
            </h3>
          </header>
          <section
            className="modal-card-body"
            style={{ backgroundColor: "transparent" }}
          >
            <form>
              <div className="field is-small">
                <label className="label"> Event Name</label>
                <div className="control " id="eventnamecontrol">
                  <input
                    className="input is-secondary "
                    type="text"
                    placeholder="event name"
                    id="eventname"
                    style={{ color: "black" }}
                  />
                </div>
                <p className="helpName"> </p>
              </div>
            </form>
            <form style={{ marginTop: 20 }}>
              <div className="field">
                <label className="label "> Event Description</label>
                <div
                  className="control has-icons-left"
                  id="eventdescriptioncontrol"
                >
                  <textarea
                    className="textarea"
                    type="text"
                    placeholder="Event Description"
                    id="eventdescription"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </form>
            <form style={{ color: "black" }}>
              <div className="field" style={{ marginTop: 20 }}>
                <label className="label"> Event Date</label>
                <form>
                  <section
                    className="field is-rounded"
                    style={{ backgroundColor: "white", width: "238px" }}
                  >
                    <DateTimePicker
                      id="datetimepicker"
                      disableClock={true}
                      disableCalendar={true}
                      yearPlaceholder="yyyy"
                      monthPlaceholder="mm"
                      dayPlaceholder="dd"
                      hourPlaceholder="00"
                      minutePlaceholder="00"
                      maxDate={maxDate}
                      onChange={(date) => setSelectedDate(date)}
                      isClearable
                    />
                  </section>
                </form>
              </div>
            </form>
          </section>
          <footer
            className="modal-card-footer"
            style={{ backgroundColor: "transparent" }}
          >
            <form
              className="md-12"
              onSubmit={handleSubmit}
              style={{ textAlignLast: "center" }}
            >
              <button type="submit" className="button is-primary" id="submit">
                Submit
              </button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
