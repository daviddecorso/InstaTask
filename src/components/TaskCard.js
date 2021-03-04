/* Disabling a linter warning that is caused by the CSS
 * framework and can't be fixed without undue effort. */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";

// Style for task cards
const cardStyle = {
  backgroundColor: "#062751",
  borderColor: "rgba(0, 0, 0, 0)",
  outline: "none",
};

function TaskCard({ event }) {
  // Creates state for expandable task cards
  const [toggleDetail, setToggle] = useState(false);

  // Expands/collapses task cards
  const onClick = () => {
    setToggle(!toggleDetail);
  };

  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <a href={event.url} style={{ color: "white" }}>
              {event.summary} - {event.dtstart}
            </a>
          </p>
          <button
            onClick={onClick}
            id="card-button"
            className="card-header-icon"
            style={cardStyle}
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
    </div>
  );
}

export default TaskCard;
