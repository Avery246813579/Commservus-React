import { UPDATE } from './types';

export const updateSomething = credentials => dispatch => {
  dispatch({
    type: UPDATE,
    payload: credentials
  });
};