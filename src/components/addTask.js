import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import axios from "axios";


function AddTask (){

 // Style for Add Task Button
const buttonStyle = {
  backgroundColor: "#062751",
  borderColor: "rgba(, 0, 0, 0)",
  outline: "none",
};

let maxDate = new Date(2022,12,30);
const dateStamp = Date();

const [submitting, setSubmitting] = useState(false);
const [selectedDate, setSelectedDate] = useState(dateStamp);

const handleSubmit = event =>{
  event.preventDefault();
  setSubmitting(true);
  setTimeout(() => {
  setSubmitting(false);
}, 3000)

/* parsing will be done here */
  const newEvent = {
    DTSTAMP: dateStamp,
    UID: "",
    DTSTART: dateStamp,
    DTEND: selectedDate,
    CLASS: "PUBLIC",
    DESCRIPTION: eventDescription.value,
    SEQUENCE: 0,
    SUMMARY: eventName.value,
    URL: "",
    Submit: submitting,
  };

  /* Sending to backend */
  axios
    .post("http://localhost:5000/events/add", {
    dtstamp: newEvent.DTSTAMP,
    dtstart: newEvent.DTSTART,
    dtend: newEvent.DTEND,
    desc: newEvent.DESCRIPTION,
    sequence: 0,
    summary: newEvent.SUMMARY,
    complete: false,
      })   

  alert("New event: " + newEvent.SUMMARY + " succesfully created for " + newEvent.DTEND);
}

const modal = document.getElementById('modal');
const eventName = document.getElementById('eventname');
const eventDescription = document.getElementById('eventdescription');


var onClick = () => {
  modal.classList.add('is-active')
 };

const onClickExit = () => {
  modal.classList.remove('is-active')
};

    return(   
    <div>
      <div class = "has-text-centered">
        <button onClick={onClick}
            class = "button mt-5 is-rounded is-primary is-focused" 
            id = "addTask"  
            style = {buttonStyle}
        >
            Add Task
        </button>
      </div>
     <div class = "modal"
       className = "modal"
       id = 'modal'>
        <div class = "modal-background"
           id = 'modalbg' >
        </div>
        <button onClick = {onClickExit}
              class= "modal-close is-large" 
              id = "addTask"  
              style = {buttonStyle}
            >
                X
        </button>
        <div class = "modal-content">
          <h3 class = "title mb-6">Enter Task Info</h3>
          <form onSubmit = {onClickExit}>
            <div class = "field is-small">
              <label class = "label"> Event Name</label>
              <div class = "control "
                id = "eventnamecontrol">
                <input class = "input" 
                type = "text" 
                placeholder = "Start Date" 
                id = "eventname" 
                style = {{color: 'black'}}/>
              </div>
              <p class = "helpName"> </p>
            </div>
          </form>
          <form>
            <div class = "field">
              <label class = "label "> Event Description</label>
              <div class = "control has-icons-left" id = "eventdescriptioncontrol">
                <textarea class = "textarea" 
                type = "text" 
                placeholder = "Event Description" 
                id = "eventdescription" 
                style = {{color: 'black'}}
                />
              </div>
              <p class = "helpDescription"> </p>
            </div>
          </form>
          <form>
            <div class = "field">
              <label class = "label"> Event Date</label>
              <form>
           <section class = "field mb-6">
           <DateTimePicker 
              id = 'datetimepicker'
              disableClock = 'true' 
              disableCalendar = 'true'
              yearPlaceholder = 'yyyy'
              monthPlaceholder = 'mm'
              dayPlaceholder = 'dd'
              hourPlaceholder = '00'
              minutePlaceholder = '00'
              maxDate = {maxDate}
              onChange = {date => setSelectedDate(date)}
              isClearable
           />
          </section>
              </form>
            </div>
          </form> 
        </div>
        <div className = "wrapper">
          {/*Only displays after hitting submit */}
          {submitting && <div> Submitting event....</div>}
        <form class = "md-12" onSubmit = {handleSubmit}>
            <button type = "submit"
            class = "button is-primary" 
            id = 'submit'> Submit </button>
          </form>
        </div>
     </div>
    </div>
    );
}

export default AddTask;