/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import Login from '../../views/login';
import Button from '../../components/button';

describe('CreateRecord view', () => {
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
          <Login history={{}} />
        </BrowserRouter>
      </Provider>
    );

    expect(component.find('.login').exists()).toBe(true);
    component.find(Button).simulate('click');
  });
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Login history={{}} logUserIn={jest.fn()} />
        </BrowserRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
