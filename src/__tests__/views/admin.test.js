/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import AllRecords from '../../views/Admin';

describe('Header component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <AllRecords />
      </BrowserRouter>
    );
    expect(component.find('.signup').exists()).toBe(true);
  });
});
