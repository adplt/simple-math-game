import {NavigationActions} from 'react-navigation';
import * as createAction from '../actions/index.action';

export const goBack = () => (dispatch) => dispatch(NavigationActions.back());

export const showResult = () => (dispatch) => dispatch(createAction.showSpinner());
