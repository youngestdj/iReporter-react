/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import DeleteModal from '../../components/deleteModal';

describe('DeleteModal component', () => {
  let component;
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  const testFunc = () => {};

  it('should render DeleteModal', () => {
    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <DeleteModal
          type="wgeg"
          id={879}
          closeModal={testFunc} />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.modal').exists()).toBe(true);
  });
});
