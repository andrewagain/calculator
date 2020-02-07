import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("Button has correct classes by default", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button
    name="TEST"
    clickHandler={jest.fn()}
    />, div);

    const buttonEl = div.querySelector('.component-button');

    expect(Array.from(buttonEl.classList)).toEqual(expect.arrayContaining(["component-button"]))


});

it("Button has correct classes with props", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button
    name="TEST"
    wide={true}
    orange={true}
    clickHandler={jest.fn()}
    />, div);

    const buttonEl = div.querySelector('.component-button');

    expect(Array.from(buttonEl.classList)).toEqual(expect.arrayContaining(["component-button", "orange", "wide"]))


});

// We did not need enzyme for the previous tests.
// Since this test does some more advanced stuff - we need enzyme
// npm i -D enzyme enzyme-adapter-react-16
import { shallow, configure,  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

it("Button click handler fires correctly", () => {
  // we use the jest placeholder function
  const handlerFn = jest.fn();

  // shallow render the component,
  // so children components won't be rendered (fast)
  const btn = shallow(<Button
    name="TEST"
    clickHandler={handlerFn}
  />);

  // btn is actually a div,
  // click the actual button el inside of it
  btn.find('button').simulate('click');

  // expect the placeholder function to have been called
  expect(handlerFn).toHaveBeenCalled();

});