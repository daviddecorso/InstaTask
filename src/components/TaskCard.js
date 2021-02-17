import React, { useState } from "react";

// Style for task cards
const cardStyle = {
  backgroundColor: "#062751",
  borderColor: "rgba(0, 0, 0, 0)",
  outline: "none",
};

function TaskCard(props) {
  // Creates state for expandable task cards
  const [toggleDetail, setToggle] = useState(false);

  // Expands/collapses task cards
  const onClick = () => {
    setToggle(!toggleDetail);
  };

  return (
    <div>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {props.event.SUMMARY} - Friday Feb 12, 2:24PM
          </p>
          <button
            onClick={onClick}
            id="card-button"
            class="card-header-icon"
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
            <div class="card-content">
              <div class="content">{props.event.DESCRIPTION}</div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">
                Edit
              </a>
              <a href="#" class="card-footer-item">
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
