import * as actionTypes from '../constants/AppConstants';

export function testAction() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: actionTypes.INITIAL_CONSTANT,
        message: 'another page'
      });
    }, 1000);
  };
}
