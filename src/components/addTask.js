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
    toast.info("Successfuly Added Task: " + eventName.value);
  const failure = () =>
    toast.warn("Failed to Add Task " + eventName.value);

  let maxDate = new Date(2022, 12, 30);
  const dateStamp = new Date();

  const [failed, setFailure] = useState(true);
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
    newEvent.desc = newEvent.desc.trim()
    newEvent.summary = newEvent.summary.trim()
    if(newEvent.desc != '' && newEvent.summary != '')
    {
      /* Sending to backend */
      axios.post("http://localhost:5000/events/add", {
      uid: user._id,
      event: newEvent,
    })
    .then((res) => {
      setFailure(false)
    })
    .catch((res) => {
      setFailure(true)
    });
    }

    // Sends Toast
    if(!failed)
    success();
    else
    failure();

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
        <button onClick={onClick} class="button is-primary" id="addTask">
          Add Task
        </button>
      </div>
      <div className="modal" className="modal" id="modal">
        <div className="modal-background" 
        id="modalbg" 
        onClick={onClickExit}>
        </div>
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
            <form style={{ color: "black" }} onSubmit={handleSubmit}>
              <div class="field is-small">
                <label class="label"> Event Name</label>
                <div class="control " id="eventnamecontrol">
                  <input
                    class="input is-secondary "
                    type="text"
                    placeholder="event name"
                    id="eventname"
                    style={{ color: "black" }}
                    oninvalid = "this.setCustomValidity('Please enter an event name')"
                    oninput = "setCustomValidity('')"
                    required
                  />
                </div>
                <p class="helpName"> </p>
              </div>
              <div class="field">
                <label class="label "> Event Description</label>
                <div
                  class="control has-icons-left"
                  id="eventdescriptioncontrol"
                >
                  <textarea
                    class="textarea"
                    type="text"
                    placeholder="Event Description"
                    id="eventdescription"
                    style={{ color: "black" }}
                    required
                  />
                </div>
              </div>
              <div class="field" style={{ marginTop: 20 }}>
                <label class="label"> Event Date</label>
                <section
                  class="field is-rounded"
                  style={{ backgroundColor: "white", width: "205px" }}
                  has-backgroundColor
                >
                  <DateTimePicker
                    id="datetimepicker"
                    disableClock="true"
                    disableCalendar="true"
                    yearPlaceholder= '2021'
                    monthPlaceholder= {dateStamp.getMonth()}
                    dayPlaceholder= {dateStamp.getDay()}
                    hourPlaceholder={dateStamp.getHours() % 12}
                    minutePlaceholder={dateStamp.getMinutes()}
                    maxDate={maxDate}
                    onChange={(date) => setSelectedDate(date)}
                    isClearable
                  />
                </section>
              </div>
              <button
                type="submit"
                class="button is-primary"
                id="submit"
                style={{ marginTop: 20, marginLeft: 280, marginRight: 280 }}
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
