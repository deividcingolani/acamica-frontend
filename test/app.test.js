import React from "react";
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import App from "../pages/index.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};


const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("test without Error index", () => {
  it('There is a Home"', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "index");
    expect(appComponent.length).toBe(1);
  });

  it('There is a Layout"', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "layout");
    expect(appComponent.length).toBe(1);
  });

  it('there is a button of login"', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "button-login");
    expect(appComponent.length).toBe(1);
  });

});
