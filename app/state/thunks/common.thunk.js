import {NavigationActions} from 'react-navigation';
import * as createAction from '../actions/index';

export function goBack () {
  return (dispatch) => dispatch(NavigationActions.back());
}

export function showResult () {
  return (dispatch) => {
    dispatch(createAction.showSpinner());
    
  };
}
