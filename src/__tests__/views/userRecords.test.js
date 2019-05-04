/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import UserRecords from '../../views/userRecords';

describe('UserRecord view', () => {
  beforeEach(() => {
    document.cookie = 'iReporterToken=wfnkl';
  });
  let component;
  const mockStore = configureStore([thunk]);
  const state = {};
  const store = mockStore({ state });

  it('should render CreateRecord', () => {
    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <UserRecords
          isLoggedIn
          getRecords={() => {}} />
        </BrowserRouter>
      </Provider>
    );

    expect(component.find('.signup').exists()).toBe(true);
  });
});
