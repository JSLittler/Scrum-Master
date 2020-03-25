import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toBeVisible } from '@testing-library/jest-dom';

import AddOption from '../components/AddOption';

describe('<AddOption />', () => {
  
  configure({ adapter: new Adapter() });
  let wrapper;

  const setup = (handleAddOption = jest.fn(), error = null) => {
      wrapper = mount(
        <AddOption
          handleAddOption={handleAddOption}
          error={error}
        />
      );
  };

  it('renders', () => {
    setup();

    expect(wrapper.find("#Add-Option").exists()).toBe(true);
  });

  it('renders error text', () => {
    const errorText = 'please enter a valid name'
    setup(jest.fn(), errorText);

    expect(wrapper.find("#Add-Option-Error").text()).toBe(errorText);
  });

  it('has a button', () => {
    setup();

    expect(wrapper.find("#Add-Option-Form-Button").exists()).toBe(true);
  });

  it('has a text input', () => {
    setup();

    expect(wrapper.find("#Add-Option-Form-Input").exists()).toBe(true);
  });

  it('calls a function when an option is correctly added', () => {
    const mockHandleAddOption = jest.fn();
    setup(mockHandleAddOption);

    const input = wrapper.find("#Add-Option-Form-Input");
    const button = wrapper.find("#Add-Option-Form-Button");

    input.simulate('change', {target: {value: 'Dave'}});
    button.simulate('submit');

    expect(mockHandleAddOption).toHaveBeenCalledWith('Dave');
  });
});