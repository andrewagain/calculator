import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow } from 'enzyme';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

