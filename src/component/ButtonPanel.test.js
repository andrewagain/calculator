import React from "react";
import { renderer, create, fireEvent, cleanup } from "testing-library";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import Button from "./Button.js";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import App, { handleClick } from "./App";

const setup = (
  props = {},
  state = { total: null, next: null, operation: null },
) => {
  const wrapper = shallow(<ButtonPanel {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

xtest("clicking '1' button increments display from 0 to 1", () => {
  const wrapper = setup(handleClick, { next: 0, total: 0 });

  //find button 1 and click
  wrapper.find({ name: "1" }).simulate("click");

  //app will test if button works
  expect(wrapper.state("next")).toBe(1);
});

xtest("clicking '1' button works", () => {
  const onButtonClick = sinon.spy();
  const wrapper2 = shallow(<Button onButtonClick={onButtonClick} />);
  wrapper2.find({ name: "1" }).simulate("click");
  expect(onButtonClick).toHaveBeenCalled();
});
