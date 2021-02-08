import React from "react";

function Import() {
  return (
    <div>
      <div class="section">
        <div class="container">
          <h1 class="title">Import Your Calendar:</h1>
          <h5 class="subtitle">
            Please provide the .ics link from canvas so we can display it in the
            app. <br /> (Instructions and UX improvements to be implemented
            later.)
          </h5>

          <div class="field">
            <label class="label is-medium">Calendar Link</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Text input"
                style={{ color: "black" }}
              ></input>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link" id="import-submit">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div class="container">
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
