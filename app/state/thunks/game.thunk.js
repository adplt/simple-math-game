import * as createAction from '../actions/index';

export function updateScore (payload) {
  return (dispatch) => {
    dispatch(createAction.updateScore(payload));
  };
}
