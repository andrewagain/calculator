import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById("root"));
