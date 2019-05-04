/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import UserRecordGroup from '../../components/userRecordGroup';

describe('UserRecordGroup component', () => {
  let component;
  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <UserRecordGroup
        date="Test"
        title="submit"
        comment="weg"
        status="wgwg"
        coordinates="wgr"
        type="adv"
        id={896} />
      </BrowserRouter>
    );
    expect(component.find('.admin-record-group').exists()).toBe(true);
  });
});
