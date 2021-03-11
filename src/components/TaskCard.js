/* Disabling a linter warning that is caused by the CSS
 * framework and can't be fixed without undue effort. */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import format from "date-fns/format";

// Style for task cards
const cardButtonStyle = {
  backgroundColor: "#062751",
  borderColor: "rgba(0, 0, 0, 0)",
  outline: "none",
};

function TaskCard({ event, zoomFilter, user }) {
  // Creates state for expandable task cards
  const [toggleDetail, setToggle] = useState(false);

  // State that tracks if a task has been completed.
  const [completedTask, setCompleted] = useState(false);

  const cardTextStyle = {
    color: "white",
    textDecoration: completedTask ? "line-through" : "none",
  };

  // Expands/collapses task cards
  const expandCard = () => {
    setToggle(!toggleDetail);
  };

  const completeTask = () => {
    setCompleted(!completedTask);

    // Create event array to send to update function:
    const updateEvent = {
      userId: user._id,
      eventId: event._id,
      complete: true,
    };
  };

  return (
    <div>
      {/*
       * Returns empty div if card should be filtered. (If a
       * card is a zoom meeting and the zoom filter is active.)
       */}
      {!(event.isZoom && zoomFilter) && (
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <span
                class="icon"
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={completeTask}
              >
                {!completedTask && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-square"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                  </svg>
                )}{" "}
                {completedTask && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-square-check"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                )}
              </span>
              <a href={event.url} style={cardTextStyle}>
                [{event.course}] {event.summary} -{" "}
                {format(new Date(event.dtstart), "eeee MMM d, h:mm aaa")}
              </a>
            </p>
            <button
              onClick={expandCard}
              id="card-button"
              className="card-header-icon"
              style={cardButtonStyle}
              aria-label="more options"
            >
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
          </header>
          {/* Only displays detail if toggleDetail is set to true. */}
          {toggleDetail && (
            <>
              <div className="card-content">
                <div className="content">{event.desc}</div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item">
                  Edit
                </a>
                <a href="#" className="card-footer-item">
                  Done
                </a>
              </footer>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskCard;
