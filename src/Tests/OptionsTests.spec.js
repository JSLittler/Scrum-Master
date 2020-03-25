import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Options from '../components/Options';

describe('<Options />', () => {
  
  configure({ adapter: new Adapter() });
  let wrapper;

  const setup = (options = ["Name1", "Name2"], handleDeleteOptions = jest.fn(), handleRemoveOption = jest.fn()) => {
      wrapper = mount(
        <Options
          options={options}
          handleDeleteOptions={handleDeleteOptions}
          handleRemoveOption={handleRemoveOption}
        />
      );
  };

  it('renders', () => {
    setup();

    expect(wrapper.find("#Options").exists()).toBe(true);
  });

  it('has a "remove all" button', () => {
    setup();

    expect(wrapper.find("#Options-Button").exists()).toBe(true);
    expect(wrapper.find("#Options-Button").text()).toBe("Remove All");
  });

  it('renders an option component for each name provided to it', () => {
    setup();

    expect(wrapper.find("#Option")).toHaveLength(2);
  });

  it('has a "remove all" button which calls "handleDeleteOptions" function', () => {
    const mockHandleDeleteOptions = jest.fn();
    setup(["Name1", "Name2"], mockHandleDeleteOptions, jest.fn());

    const button = wrapper.find("#Options-Button");
    button.simulate('click');
    expect(mockHandleDeleteOptions).toHaveBeenCalled();
  });
});