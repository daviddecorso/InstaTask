import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTask({ user }) {

  toast.configure();
  const success = () =>
    toast.info("Successfuly Added Task: " + eventName.value);
  const failure = () => toast.error("Failed to Add Task " + eventName.value);

  // Create DateStamp, maxDate is set to 3 years after current date
  const dateStamp = new Date();
  var year = dateStamp.getFullYear().toString;
  var month = dateStamp.getMonth().toString;
  var day = dateStamp.getDay();
  let maxDate = new Date(year + 3, month, day);

  const [selectedDate, setSelectedDate] = useState(dateStamp);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      uid: user._id,
      dtstamp: dateStamp,
      dtstart: selectedDate,
      dtend: selectedDate,
      desc: eventDescription.value,
      sequence: 0,
      summary: eventName.value,
      complete: false,
      dtend: selectedDate,
    };

    // Invalidate event if user only entered spaces
    newEvent.desc = newEvent.desc.trim();
    newEvent.summary = newEvent.summary.trim();
    if (newEvent.desc != "" && newEvent.summary != "") {
      /* Sending to backend */
      axios
        .post("http://localhost:5000/events/add", {
          uid: user._id,
          event: newEvent,
        })
        .then((res) => {
          success();
        })
        .catch((res) => {
          failure();
        });
    } else {
      failure();
    }

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
        <button onClick={onClick} class="button is-primary" id="addTask" data-testid = "add-button">
          Add Task
        </button>
      </div>
      <div className="modal" id="modal">
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
            <p className="modal-card-title">New Event Information</p>
            <button
              className="delete is-large"
              aria-label="close"
              onClick={onClickExit}
              data-testid = "modal-close"
            ></button>
          </header>
          <section
            className="modal-card-body"
            style={{ backgroundColor: "transparent" }}
          >
            <form style={{ color: "black" }} onSubmit={handleSubmit}>
              <div className="field is-small">
                <label className="label"> Event Name</label>
                <div className="control " id="eventnamecontrol">
                  <input
                    className="input is-secondary "
                    type="text"
                    placeholder="eventName"
                    id="eventname"
                    style={{ color: "black" }}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label "> Event Description</label>
                <div
                  className="control has-icons-left"
                  id="eventdescriptioncontrol"
                >
                  <textarea
                    className="textarea"
                    type="text"
                    placeholder="eventDescription"
                    id="eventdescription"
                    style={{ color: "black" }}
                    required
                  />
                </div>
              </div>
              <div className="field" style={{ marginTop: 20 }}>
                <label className="label"> Event Date</label>
                <section
                  className="field is-rounded"
                  style={{ backgroundColor: "white", width: "205px" }}
                  has-backgroundColor
                >
                  <DateTimePicker
                    id="datetimepicker"
                    disableClock={true}
                    disableCalendar={true}
                    yearPlaceholder={dateStamp.getFullYear().toString()}
                    monthPlaceholder={dateStamp.getMonth().toString()}
                    dayPlaceholder={dateStamp.getDay().toString()}
                    hourPlaceholder={(dateStamp.getHours() % 12).toString()}
                    minutePlaceholder={dateStamp.getMinutes().toString()}
                    maxDate={maxDate}
                    onChange={(date) => setSelectedDate(date)}
                    isClearable
                  />
                </section>
              </div>
              <div className="level">
                <div className="level-item" style={{ marginTop: "5%"}}>
                  <button
                    type="submit"
                    className="button is-primary"
                    id="submit"
                    data-testid = "submit-button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
