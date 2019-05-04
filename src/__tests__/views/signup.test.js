/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import Signup from '../../views/signup';
import Button from '../../components/button';

describe('Signup view', () => {
  let component;
  const mockStore = configureStore([thunk]);
  const state = {
    email: null,
    password: null,
    error: null,
    message: null
  };
  const store = mockStore({ state });

  it('should render CreateRecord', () => {
    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Signup signUserUp={() => {}} />
        </BrowserRouter>
      </Provider>
    );

    expect(component.find('.signup').exists()).toBe(true);
    component.find(Button).simulate('click');
  });
});
