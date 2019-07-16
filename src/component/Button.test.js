import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, simulate } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import ButtonPanel from "./ButtonPanel";
import Button from "./Button";

xtest("clicking button changes", () => {
  const wrapper = shallow(<Button clickHandler={ButtonPanel.clickHandler} />);
  wrapper.find("button").simulate("click");
  expect(container).not.toBeUndefined();
});
