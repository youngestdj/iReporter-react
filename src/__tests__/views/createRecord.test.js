/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import CreateRecord from '../../views/createRecord';
import Button from '../../components/button';

describe('CreateRecord view', () => {
  let component;
  const mockStore = configureStore([thunk]);
  const state = {
    title: null,
    type: null,
    longitude: null,
    latitude: null,
    comment: null,
    success: null,
    error: null,
    loading: false
  };
  const store = mockStore({ state });
  beforeEach(() => {
    document.cookie = 'iReporterToken=wfnkl';
  });
  it('should render CreateRecord', () => {
    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CreateRecord />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.record').exists()).toBe(true);
    component.find(Button).simulate('click');
    component.find('input').forEach((node) => {
      node.simulate('click');
    });
  });
});
