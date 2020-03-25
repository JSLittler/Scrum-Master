import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Action from '../components/Action';


describe('<Action />', () => {
  
  configure({ adapter: new Adapter() });
  let wrapper;

  const setup = (hasOptions = true, handlePick = jest.fn(), hideElements = false) => {
      wrapper = mount(
        <Action
          hasOptions={hasOptions}
          handlePick={handlePick}
          hideElements={hideElements}
        />
      );
  };

  it('renders', () => {
    setup();

    expect(wrapper.find("#Action-Component").exists()).toBe(true);
  });

  it('has a button with correct text', () => {
    setup();

    expect(wrapper.find("#Action-Button").exists()).toBe(true);
    expect(wrapper.find("#Action-Button").text()).toBe("Who should I victimise?");
  });

  it('has a button that can be hidden', () => {
    setup(true, jest.fn(), true);

    expect(wrapper.find("#Action-Button").props().hidden).toBe(true);
  });

  it('has a button that calls a function when the button is clicked', () => {
    const mockHandlePick = jest.fn();
    setup(true, mockHandlePick, false);

    const button = wrapper.find("#Action-Button");
    button.simulate('click');

    expect(mockHandlePick).toHaveBeenCalled();
  });

  it('has a button that does not call a function when the button is clicked with no options', () => {
    const mockHandlePick = jest.fn();
    setup(false, mockHandlePick, false);

    const button = wrapper.find("#Action-Button");
    button.simulate('click');
    
    expect(mockHandlePick).not.toHaveBeenCalled();
  });
});