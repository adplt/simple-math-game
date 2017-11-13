import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Navigator from '../../routes/index.routes';
import networkStatus from './networkStatus.reducer';
import highlightText from './highlightText.reducer';
import score from './score.reducer';
import highScore from './highScore.reducer';

import modal from './modal.reducer';
import spinner from './spinner.reducer';
import leaderBoard from './leaderBoard.reducer';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const rootReducer = combineReducers({
  nav,
  form: formReducer,
  networkStatus,
  highlightText,
  score,
  highScore,
  modal,
  spinner,
  leaderBoard,
});

export default rootReducer;
