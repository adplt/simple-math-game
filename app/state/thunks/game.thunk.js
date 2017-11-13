import * as createAction from '../actions/index.action';
import * as action from '../actions/index.action';
import {NavigationActions} from 'react-navigation';

export const updateScore = (payload) => (dispatch, getState) => {
  dispatch(action.showSpinner());
  setTimeout(() => {
    const state = getState();
    const {highScore} = state;
    Number(highScore) < Number(payload) ? dispatch(createAction.updateHighScore(payload)) : null;
    dispatch(createAction.updateScore(payload));
    dispatch(action.hideSpinner());
  }, 2000);
  setTimeout(() => {
    dispatch(action.showModal());
  }, 3000);
};

export const resetToBoard = () => (dispatch) => {
  dispatch(action.hideModal());
  setTimeout(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Boarding'})
      ]
    }));
  }, 1000);
};
