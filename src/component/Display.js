import React from "react";
import "./Display.css";

//Displays value passes to it in a div
export default function Display({ value }) {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
}
