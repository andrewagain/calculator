import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
});
