import React, { useState } from "react";
import { IconSettings } from "@tabler/icons";

function Settings({ user }) {
  const modal = document.getElementById("settingsmodal");

  var onClick = () => {
    modal.classList.add("is-active");
  };

  const onClickExit = () => {
    modal.classList.remove("is-active");
  };

  return (
    <div>
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
        <IconSettings color="white" size={28} stroke={2.0} />
      </button>
      <div className="modal" id="settingsmodal">
        <div
          className="modal-background"
          id="settingsmodalbg"
          onClick={onClickExit}
        ></div>
        <div className="modal-content"></div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={onClickExit}
        ></button>
      </div>
    </div>
  );
}
export default Settings;
