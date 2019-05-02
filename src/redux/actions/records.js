import axios from 'axios';
import { CREATE_RECORD } from './actionTypes';
import { getCookie } from '../../assets/js/cookies';

const apiUrl = 'https://jessam-ireporter.herokuapp.com';

export const sendRecordCredentials = () => ({
  type: CREATE_RECORD,
});

export const createRecord = credentials => async (dispatch) => {
  const { type } = credentials;
  const token = getCookie('iReporterToken');
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
