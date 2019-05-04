/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/footer';

describe('Footer component', () => {
  it('should render footer', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('footer').exists()).toBe(true);
  });
});
