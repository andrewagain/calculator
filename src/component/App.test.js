import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, simulate } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import ButtonPanel from "./ButtonPanel";
import Button from "./Button";
import Display from "./Display";

// const setup = (
//   // props = {},
//   state = { total: null, next: null, operation: null },
// ) => {
//   const wrapper = shallow(<App />);
//   if (state) wrapper.setState(state);
//   return wrapper;
// };

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

describe("Calculator", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render the Calculator App Component", () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
  });
});

/*
test("renders div with with id 'container' without crashing", () => {
  const setup2 = shallow(<App />);
  const container = findByTestAttr(setup2, "container");
  expect(container).not.toBeUndefined();
});

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.hasClass("component-app");
  return appComponent;
});

test("expect initial state for total to be null", () => {
  const wrapper = shallow(<App />);
  const initialState = wrapper.state("total");
  expect(initialState).toBe(null);
});

test("clicking '1' button increments display from 0 to 1", () => {
  //find button 1 and click
  const setup2 = (
    props = {},
    state = { total: null, next: null, operation: null },
  ) => {
    const wrapper = shallow(<ButtonPanel />);
    if (state) wrapper.setState(state);
    return wrapper;
  };
});

// test("propType testing", () => {});
*/
