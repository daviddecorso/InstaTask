import React from "react";
import Tabs from "./Tabs";
import CalendarView from "./CalendarView";

const testEvent = {
  DTSTAMP: "20201113T183400Z",
  UID: "event-assignment-6864826",
  DTSTART: "20210206T000000",
  DTEND: "20210206T000000",
  CLASS: "PUBLIC",
  DESCRIPTION:
    "For the upcoming sprint deadline, please have the following items available on your GitHub site:\n\n* Vision Statement [7 points]\n\n",
  SEQUENCE: 0,
  SUMMARY: "Sprint #1 [COP4331C_CMB-21Spring 00038]",
  URL:
    "https://webcourses.ucf.edu/calendar?include_contexts=course_1369388&month=02&year=2021#assignment_6864826",
};

const cardStyle = {
  backgroundColor: "#062751",
  borderColor: "rgba(0, 0, 0, 0)",
};

function TaskView(props) {
  return (
    <div>
      {/* <Tabs /> */}
      <div class="container">
        <br />
      </div>
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {testEvent.SUMMARY} - Friday Feb 12, 2:24PM
              </p>
              <button
                class="card-header-icon"
                id="card-button"
                style={cardStyle}
                aria-label="more options"
              >
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevron-down"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                {testEvent.DESCRIPTION}
                <br />
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">
                Edit
              </a>
              <a href="#" class="card-footer-item">
                Done
              </a>
            </footer>
          </div>
        </div>
        <div class="column">
          <CalendarView />
        </div>
      </div>
    </div>
  );
}

export default TaskView;
