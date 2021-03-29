import React, { useState } from "react";
import axios from "axios";
import { IconSettings, IconToggleLeft, IconToggleRight, IconCaretDown } from "@tabler/icons";

function Settings({ user }) {
  const modal = document.getElementById("settingsmodal");
  const dropdown = document.getElementById("dropdown-menu");

  const [toggleZoom, setToggle] = useState(false);

  const completeTask = () => {
    setToggle(!toggleZoom);
  };

  const onClick = () => {
    modal.classList.add("is-active");
  };

  const onClickExit = () => {
    modal.classList.remove("is-active");
  };

  const onClickDrop = () => {
    dropdown.classList.toggle("is-active");
  };

  const onClickSave = () => {
    const updateImportBox = document.getElementById("updateImportBox");
    console.log(user);
    if (updateImportBox.value.includes(".ics")) {
      axios
        .put("http://localhost:5000/users/update/calendar", {
          id: user._id,
          calendarLink: updateImportBox.value,
        })
        .then((res) => console.log(res.data));
    } else {
      window.alert("Please submit a valid .ics URL.");
    }
    modal.classList.remove("is-active");
  };

  return (
    <>
      <button
        onClick={onClick}
        id="settings"
        style={{
          background: "none",
          border: "none",
          active: "none",
          outline: "none",
        }}
      >
        <IconSettings color="white" size={28} stroke={1.5} />
      </button>
      <div className="modal" id="settingsmodal">
        <div
          className="modal-background"
          id="settingsmodalbg"
          onClick={onClickExit}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title" style={{ color: "white" }}>
              Settings
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={onClickExit}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="content">
              <div className="block">
                <div className="columns is-vcentered">
                  <div className="column">
                    <p style={{ color: "white" }}>Default Notification Time</p>
                  </div>
                  <div className="column">
                    <div className="dropdown" id="dropdown-menu">
                      <div className="dropdown-trigger">
                        <button
                          className="button is-primary"
                          aria-haspopup="true"
                          aria-controls="dropdown-menu2"
                          onClick={onClickDrop}
                        >
                          <span>Time Frame</span>
                          <IconCaretDown color="white" size={28} stroke={2.0} />
                        </button>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <div className="dropdown-item">
                            <p style={{ color: "black" }}>1 Hour</p>
                          </div>
                          <div className="dropdown-item">
                            <p style={{ color: "black" }}>12 Hours</p>
                          </div>
                          <div className="dropdown-item">
                            <p style={{ color: "black" }}>1 Day</p>
                          </div>
                          <div className="dropdown-item">
                            <p style={{ color: "black" }}>1 Week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="columns is-vcentered">
                  <div className="column">
                    <p style={{ color: "white" }}>Zoom Filter</p>
                  </div>
                  <div className="column">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={completeTask}
                    >
                      {!toggleZoom && (
                        <svg xmlns="http://www.w3.org/2000/svg" class="iconTabler iconTablerToggleLeft" width="42" height="42" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <circle cx="8" cy="12" r="2" />
                          <rect x="2" y="6" width="20" height="12" rx="6" />
                        </svg>
                      )}{" "}
                      {toggleZoom && (
                        <svg xmlns="http://www.w3.org/2000/svg" class="iconTabler iconTablerToggleRight" width="42" height="42" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <circle cx="16" cy="12" r="2" />
                          <rect x="2" y="6" width="20" height="12" rx="6" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="columns is-vcentered">
                  <div className="column">
                    <p style={{ color: "white" }}>Update Calendar Link</p>
                  </div>
                  <div className="column">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Text input"
                        id="updateImportBox"
                        style={{ color: "black" }}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={onClickSave}>
              Save changes
            </button>
            <button className="button is-danger" onClick={onClickExit}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Settings;
