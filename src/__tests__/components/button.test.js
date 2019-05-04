/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Button from '../../components/button';


describe('Button component', () => {
  let component;
  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <Button text="Test button" type="submit" />
      </BrowserRouter>
    );
    expect(component.find('.submit').exists()).toBe(true);
    component.find(Button).simulate('click');
  });
});
