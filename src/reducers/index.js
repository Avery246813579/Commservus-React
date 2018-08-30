import { combineReducers } from 'redux';
<<<<<<< HEAD
=======
import errorReducer from './errorReducer';
>>>>>>> feature/nav
import userReducer from './userReducer';


export default combineReducers({
<<<<<<< HEAD
  user: userReducer
=======
  user: userReducer,
  error: errorReducer
>>>>>>> feature/nav
});