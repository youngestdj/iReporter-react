/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import AdminRecordGroup from '../../components/adminRecordGroup';


describe('UserRecordGroup component', () => {
  let component;
  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <AdminRecordGroup
        date="Test"
        title="submit"
        comment="weg"
        status="wgwg"
        coordinates="wgr"
        />
      </BrowserRouter>
    );
    expect(component.find('.admin-record-group').exists()).toBe(true);
  });
});
