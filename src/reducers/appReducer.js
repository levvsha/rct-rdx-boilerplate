import * as actionTypes from '../constants/AppConstants';

const initialState = {
  message: ''
};

export default function mazeReducer(state = initialState, action) {
  const {
    message,
    type
  } = action;

  switch (type) {
    case actionTypes.INITIAL_CONSTANT:
      return {
        ...state,
        message
      };

    default:
      return state;
  }
}
