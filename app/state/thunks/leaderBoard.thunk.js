import * as api from '../../utils/api.util';
import * as action from '../actions/index.action';
import {NavigationActions} from 'react-navigation';

export const getLeaderBoard = () => (dispatch, getState) => {
  const state = getState();
  dispatch(NavigationActions.navigate({routeName: 'LeaderBoard'}));
  setTimeout(() => {
    dispatch(action.showSpinner());
    api.getLeaderBoardAPI(state.userId).
      then((res) => {
        dispatch(action.updateLeaderBoard(res.data.response));
        dispatch(action.hideSpinner());
      }).catch((err) => err);
  }, 500);
};
