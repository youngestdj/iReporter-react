/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import Profile from '../../views/profile';

describe('CreateRecord view', () => {
  beforeEach(() => {
    document.cookie = 'iReporterToken=wfnkl';
    document.cookie = 'iReporterUsername=wfnkl';
    document.cookie = 'iReporterLastname=wfnkl';
    document.cookie = 'iReporterOthernames=wfnkl';
  });
  let component;
  const mockStore = configureStore([thunk]);
  const state = {
    redFlags: {
      allRedFlags: []
    },
    interventions: {
      allInterventions: []
    }
  };
  const store = mockStore({ state });

  it('should render CreateRecord', () => {
    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Profile
          isLoggedIn
          getRecords={jest.fn()} />
        </BrowserRouter>
      </Provider>
    );

    expect(component.find('.signup').exists()).toBe(true);
  });
});
