/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import Modal from '../../components/modal';
import Button from '../../components/button';

describe('Modal component', () => {
  let component;
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  const testFunc = () => { };

  it('should render Modal', () => {
    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Modal
            deleteRecord={testFunc}
            type="wgrg"
            id={855}
            closeModal={testFunc} />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.modal').exists()).toBe(true);
    expect(component.find('.block').exists()).toBe(true);
    expect(component.find('.edit-comment').exists()).toBe(true);
    component.find(Button).forEach((node) => {
      node.simulate('click');
    });
  });
});
