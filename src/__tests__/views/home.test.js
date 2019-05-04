/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../views/home';

describe('Home component view', () => {
  let component;
  it('should render Home component', () => {
    component = mount(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(component.find('section').exists()).toBe(true);
  });
});
