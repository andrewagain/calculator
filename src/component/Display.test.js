import React from "react";
import ReactDOM from "react-dom";
import Display from "./Display";
import { mount } from 'enzyme';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
});

describe('<Display />', () => {
    const displayVal = '30';
    it('contains correct value', () => {
        const wrapper = mount(<Display value={displayVal} />)
        const value = wrapper.find('.component-display div').text()
        expect(value).toEqual('30')
    })
    it('accepts value props', () => {
        const wrapper = mount(<Display value={displayVal} />);
        expect(wrapper.props().value).toEqual(displayVal)
    })
})
