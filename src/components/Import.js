import React from "react";

function Import() {
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
                style={{ color: "black" }}
              ></input>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" id="import-submit">
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
