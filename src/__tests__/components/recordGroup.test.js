/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import RecordGroup from '../../components/recordGroup';


describe('UserRecordGroup component', () => {
  let component;
  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <RecordGroup
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
