/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../views/404';

describe('Header component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(component.find('h1').exists()).toBe(true);
  });
});
