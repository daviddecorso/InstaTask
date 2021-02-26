import React from "react";
import { useState } from "react";
import axios from "axios";

function Import() {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    const importBox = document.getElementById("importBox");
    if (importBox.value.includes(".ics")) {
      setErrorMessage("Is a valid URL");
    } else {
      setErrorMessage("Is not a valid URL");
    }
  };

  const onClick = () => {
    const importBox = document.getElementById("importBox");
    const calendarLink = importBox.value;
    // Alert if invalid, set box to empty
    // Contains check
    // console.log(calStr)
    /*axios.post('http://localhost:5000/users/add', {
      calendarLink: calendarLink,
      id: id,
      displayName: displayName
    })
      .then(res => console.log(res.data))*/
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <h1 className="title">Import Your Calendar:</h1>
          <h5 className="subtitle">
            Please provide the .ics link from canvas so we can display it in the
            app. <br /> (Instructions and UX improvements to be implemented
            later.)
          </h5>

          <div className="field">
            <label className="label is-medium">Calendar Link</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                id="importBox"
                style={{ color: "black" }}
              ></input>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                id="import-submit"
                onClick={onClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <p>
            <br /> This is where we are going to ask a user to give us their
            .ics link the first time they login.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Import;
