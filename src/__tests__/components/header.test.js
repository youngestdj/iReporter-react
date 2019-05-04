/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/header';

describe('Header component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <Header isLoggedIn />
      </BrowserRouter>
    );
    expect(component.find('nav').exists()).toBe(true);
  });
});
