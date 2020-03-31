import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr, checkProps } from "../test/testUtils"

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter()});

// setup function which makes a shallow wrapper out of congrats component
/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

 // default props for Congrats component
const defaultProps = { success: false};

const setup = (props={})  => {
    // giving default props then overriding them with whatever props we supply
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />);
}


it('renders without error', () => {
 const wrapper = setup();
 const component = findByTestAttr(wrapper, 'component-congrats');
 expect(component.length).toBe(1);
});

it('renders no text when `success` prop is false', () => {
const wrapper = setup({success: false});
const component = findByTestAttr(wrapper, 'component-congrats');
expect(component.text()).toEqual('');
});



it('renders non-empty congrats message when `success` prop is true', () => {
const wrapper = setup({ success: true });
const message = findByTestAttr(wrapper, 'congrats-message');
expect(message.text().length).not.toBe(0);

});

it("does not throw warning with expected props", () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
})