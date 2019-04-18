import axios from 'axios';
import { SIGNUP } from './actionTypes';

const apiUrl = 'https://jessam-ireporter.herokuapp.com';

export const sendSignupCredentials = () => ({
  type: SIGNUP,
});

export const sendLoginCredentials = () => ({
  type: SIGNUP,
});

export const signUserUp = credentials => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/v1/auth/signup`,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch(sendSignupCredentials());
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const logUserIn = credentials => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/v1/auth/login`,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch(sendLoginCredentials());
    return data;
  } catch (error) {
    return error.response.data;
  }
};
