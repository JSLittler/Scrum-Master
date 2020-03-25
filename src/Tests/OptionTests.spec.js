import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toBeVisible } from '@testing-library/jest-dom';

import Option from '../components/Option';

describe('<Option />', () => {
  
  configure({ adapter: new Adapter() });
  let wrapper;

  const setup = (option = "Name", handleRemoveOption = jest.fn()) => {
      wrapper = mount(
        <Option
          key={option}
          optionText={option}
          value={option}
          handleRemoveOption={() => { handleRemoveOption(option) }}
        />
      );
  };

  it('renders', () => {
    setup();

    expect(wrapper.find("#Option").exists()).toBe(true);
  });

  it('has option text', () => {
    setup();

    expect(wrapper.find("#Option-Text").exists()).toBe(true);
    expect(wrapper.find("#Option-Text").text()).toBe("Could it be...");
  });

  it('has the name of the option', () => {
    setup();

    expect(wrapper.find("#Option-Name").exists()).toBe(true);
    expect(wrapper.find("#Option-Name").text()).toBe("Name");
  });

  it('has a "remove option" button', () => {
    setup();

    expect(wrapper.find("#Option-Button").exists()).toBe(true);
    expect(wrapper.find("#Option-Button").text()).toBe("Remove this victim");
  });

  it('has a "remove option" button that can call a "handleRemoveOption" function', () => {
    const mockHandleRemoveOption = jest.fn()
    setup("Name", mockHandleRemoveOption);

    const button = wrapper.find("#Option-Button");
    button.simulate('click');

    expect(mockHandleRemoveOption).toHaveBeenCalledWith("Name");
  });
});