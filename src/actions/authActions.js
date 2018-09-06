import axios from 'axios';

import { GET_ERRORS } from './types';

export const registerUser = (userData, history) => dispatch => {
  axios
    // .post('https://localhost:3001/api/signup', userData)
    .post('https://jsonplaceholder.typicode.com/posts', userData)
    .then(res => {
      console.log(res);

      history.push('/login');
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};