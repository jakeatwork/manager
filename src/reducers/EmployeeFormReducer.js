import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
