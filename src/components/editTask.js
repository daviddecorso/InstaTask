import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { render } from "@testing-library/react";

function EditTask({ user, event, index, events, setEvents }) {
  toast.configure();
  const successNotif = () =>
    toast.info("Successfuly Edited Task: " + eventName);
  const errorNotif = () => toast.error("Failed to Edit Task " + eventName);

  const dateStamp = new Date();
  var year = dateStamp.getFullYear().toString;
  var month = dateStamp.getMonth().toString;
  var day = dateStamp.getDay();
  let maxDate = new Date(year + 3, month, day);

  const initialDesc = event.desc;
  const initialName = event.summary;
  const initialDate = event.dtend;
  const [selectedDate, setSelectedDate] = useState(dateStamp);
  const [open, openModal] = useState(false);
  const [eventName, changeEvent] = useState(event.summary);
  const [eventDesc, changeEventDesc] = useState(event.desc);

  const handleSubmit = (e) => {
    const newEvent = {
      dtstart: selectedDate,
      dtend: selectedDate,
      desc: eventDesc,
      location: null,
      sequence: null,
      url: null,
      summary: eventName,
      course: null,
    };

    const tempNewEvent = {
      dtstart: selectedDate,
      dtend: selectedDate,
      desc: eventDesc,
      location: null,
      sequence: null,
      url: null,
      summary: eventName,
      course: null,
    };

    // Check if any values weren't changed
    if (selectedDate === initialDate) {
      newEvent.dtend = newEvent.dtstart = null;
      tempNewEvent.dtStart = event.dtStart;
      tempNewEvent.dtEnd = event.dtEnd;
    }

    if (eventDesc === initialDesc) newEvent.desc = null;

    if (eventName === initialName) newEvent.summary = null;

    axios
      .put("http://localhost:5000/events/edit", {
        uid: user._id,
        eid: event._id,
        newEvent: newEvent,
      })
      .then((res) => {
        successNotif();
        openModal(false);
      })
      .catch((res) => {
        errorNotif();
      });

    let tempArr = [...events];
    tempArr[index] = tempNewEvent;
    setEvents(tempArr);
  };

  const onClick = () => {
    openModal(true);
  };

  const onClickExit = () => {
    openModal(false);
  };
  const updateEvent = (e) => {
    changeEvent(e.target.value);
  };
  const updateEventDesc = (e) => {
    changeEventDesc(e.target.value);
  };

  return (
    <div>
      <div class="has-text-centered">
        <a
          onClick={onClick}
          className="card-footer-item"
          date-testid="edit-button"
        >
          Edit
        </a>
      </div>
      {open && (
        <div className="modal is-active" id="updatemodal">
          <div
            class="modal-background"
            id="modalbg"
            onClick={onClickExit}
          ></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p className="modal-card-title">Update Event Information</p>
              <button
                className="delete is-large"
                aria-label="close"
                onClick={onClickExit}
                data-testid="modal-close"
              ></button>
            </header>
            <section class="modal-card-body">
              <form>
                <div class="field is-small">
                  <label class="label"> Event Name</label>
                  <div class="control " id="eventnamecontrol">
                    <input
                      class="input is-secondary "
                      type="text"
                      id="updatename"
                      style={{ color: "black" }}
                      value={eventName}
                      onChange={updateEvent}
                      data-testid="event-name"
                      required
                    />
                  </div>
                  <p class="helpName"> </p>
                </div>
              </form>
              <form style={{ marginTop: 20 }}>
                <div class="field">
                  <label class="label "> Event Description</label>
                  <div
                    class="control has-icons-left"
                    id="eventdescriptioncontrol"
                  >
                    <textarea
                      class="textarea"
                      type="text"
                      id="updatedescription"
                      style={{ color: "black" }}
                      value={eventDesc}
                      onChange={updateEventDesc}
                      data-testid="event-description"
                      required
                    />
                  </div>
                </div>
              </form>
              <form style={{ color: "black" }}>
                <div class="field" style={{ marginTop: 20 }}>
                  <label class="label"> Event Date</label>
                  <form>
                    <section class="field is-rounded">
                      <DateTimePicker
                        id="datetimepicker"
                        disableClock="true"
                        disableCalendar="true"
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
                  </form>
                </div>
              </form>
              <form>
                <div className="level">
                  <div className="level-item" style={{ marginTop: "5%" }}>
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="button is-primary"
                      id="submit"
                      data-testid="submit-button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
export default EditTask;
