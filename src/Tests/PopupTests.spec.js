import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Popup from '../components/Popup';

describe('<Popup />', () => {
  
  configure({ adapter: new Adapter() });
  let wrapper;

  const setup = (text = "Some text", closePopup = jest.fn()) => {
      wrapper = mount(
        <Popup
          text={text}
          closePopup={closePopup}
        />
      );
  };

  it('renders', () => {
    setup();

    expect(wrapper.find("#Popup").exists()).toBe(true);
  });

  it('renders correect text', () => {
    setup();

    expect(wrapper.find("#Popup-Text").text()).toBe("Some text");
  });

  it('renders a "close" button', () => {
    setup();

    expect(wrapper.find("#Popup-Button").exists()).toBe(true);
    expect(wrapper.find("#Popup-Button").text()).toBe("close");
  });

  it('has a "close" button which calls "closePopup" function', () => {
    const mockClosePopup = jest.fn();
    setup("Some text", mockClosePopup);

    const button = wrapper.find("#Popup-Button");
    button.simulate('click');
    expect(mockClosePopup).toHaveBeenCalled();
  });
});