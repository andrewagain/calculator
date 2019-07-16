import React from "react";
import ReactDOM from "react-dom";
import ButtonPanel from "./ButtonPanel";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ButtonPanel />, div);
});
