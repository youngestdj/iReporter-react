/* eslint-disable no-undef */
import * as actions from '../../../redux/actions/records';
import * as types from '../../../redux/actions/actionTypes';

describe('Record actions', () => {
  it('handles sendRecordCredentials', () => {
    const expectedAction = {
      type: types.CREATE_RECORD,
    };
    expect(actions.sendRecordCredentials()).toEqual(expectedAction);
  });

  it('handles getUserRecords', () => {
    const expectedAction = {
      type: types.GET_RECORDS,
    };
    expect(actions.getUserRecords()).toEqual(expectedAction);
  });

  it('handles getUserCurrentRecord', () => {
    const expectedAction = {
      type: types.GET_CURRENT_RECORD,
    };
    expect(actions.getUserCurrentRecord()).toEqual(expectedAction);
  });
  it('handles getUserRecords', () => {
    const expectedAction = {
      type: types.GET_RECORDS,
    };
    expect(actions.getUserRecords()).toEqual(expectedAction);
  });
  it('handles updateRecordData', () => {
    const expectedAction = {
      type: types.UPDATE_DATA,
    };
    expect(actions.updateRecordData()).toEqual(expectedAction);
  });
  it('handles deleteCurrentRecord', () => {
    const expectedAction = {
      type: types.DELETE_RECORD,
    };
    expect(actions.deleteCurrentRecord()).toEqual(expectedAction);
  });
});
