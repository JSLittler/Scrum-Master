import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/Header';

describe('<Header />', () => {
  
  configure({ adapter: new Adapter() });
  let wrapper;

  const setup = (subtitle = "Subtitle", hideElements = false) => {
      wrapper = mount(
        <Header
          subtitle={subtitle}
          hideElements={hideElements}
        />
      );
  };

  it('renders', () => {
    setup();

    expect(wrapper.find("#Header").exists()).toBe(true);
  });

  it('has a default title', () => {
    setup();

    expect(wrapper.find("#Header-Title").exists()).toBe(true);
    expect(wrapper.find("#Header-Title").text()).toBe("Choose A Scrum Master");
  });

  it('has a settable subtitle', () => {
    setup();

    expect(wrapper.find("#Header-Subtitle").exists()).toBe(true);
    expect(wrapper.find("#Header-Subtitle").text()).toBe("Subtitle");
  });

  it('does not render a subtitle if one is not set', () => {
    setup('', false);

    expect(wrapper.find("#Header-Subtitle").exists()).toBe(false);
  });

  it('has a subtitle that can be hidden', () => {
    setup('subtitle', true);

    expect(wrapper.find("#Header-Subtitle").props().hidden).toBe(true);
  });

  it('renders an image', () => {
    setup();

    expect(wrapper.find("#Header-Image").exists()).toBe(true);
  });
});