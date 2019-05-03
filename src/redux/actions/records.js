import axios from 'axios';
import {
  CREATE_RECORD, GET_RECORDS, GET_CURRENT_RECORD, UPDATE_DATA, DELETE_RECORD
} from './actionTypes';
import { getCookie } from '../../assets/js/cookies';

const apiUrl = 'https://jessam-ireporter.herokuapp.com';
const token = getCookie('iReporterToken');

export const sendRecordCredentials = () => ({
  type: CREATE_RECORD,
});
export const getUserRecords = () => ({
  type: GET_RECORDS,
});
export const getUserCurrentRecord = () => ({
  type: GET_CURRENT_RECORD
});
export const updateRecordData = () => ({
  type: UPDATE_DATA
});
export const deleteCurrentRecord = () => ({
  type: DELETE_RECORD
});

export const createRecord = credentials => async (dispatch) => {
  const { type } = credentials;
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/v1/${type}`,
      credentials,
      {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch(sendRecordCredentials());
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getRecords = type => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/v1/${type}`,
      {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch(getUserRecords());
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCurrentRecord = (type, id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/v1/${type}/${id}`,
      {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch(getUserCurrentRecord());
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateData = (type, id, field, payload) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `${apiUrl}/api/v1/${type}/${id}/${field}`,
      payload,
      {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch(updateRecordData());
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteRecord = (type, id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `${apiUrl}/api/v1/${type}/${id}`,
      {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch(deleteCurrentRecord());
    return data;
  } catch (error) {
    return error.response.data;
  }
};
