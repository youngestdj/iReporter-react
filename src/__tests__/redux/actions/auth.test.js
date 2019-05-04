/* eslint-disable no-undef */
import * as actions from '../../../redux/actions/auth';
import * as types from '../../../redux/actions/actionTypes';

describe('Record actions', () => {
  it('handles sendSignupCredentials', () => {
    const expectedAction = {
      type: types.SIGNUP,
    };
    expect(actions.sendSignupCredentials()).toEqual(expectedAction);
  });

  it('handles sendLoginCredentials', () => {
    const expectedAction = {
      type: types.SIGNUP,
    };
    expect(actions.sendLoginCredentials()).toEqual(expectedAction);
  });
});
