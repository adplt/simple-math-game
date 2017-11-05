import * as createAction from '../actions/index';
import {NavigationActions} from 'react-navigation';

export function updateScore (payload) {
  return (dispatch, getState) => {
    const state = getState();
    const {highScore} = state;
    Number(highScore) < Number(payload) ? dispatch(createAction.updateHighScore(payload)) : null;
    dispatch(createAction.updateScore(payload));
  };
}

export function resetToBoard () {
  return (dispatch) => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Boarding'})
      ]
    }));
  };
}
