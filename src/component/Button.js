import React from "react";
//import PropTypes from "prop-types";
import "./Button.css";

//Button component reacives all the destructured props
export default function Button({ name, orange, wide, clickHandler }) {
  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : ""
  ];

  return (
    <div className={className.join(" ").trim()}>
      {/* The Class is Dynamically ^ named based on the props recived */}
      {/* The onClick callsback clickhandler and send the props name back */}
      <button onClick={() => clickHandler(name)}>{name}</button>
    </div>
  );
}
