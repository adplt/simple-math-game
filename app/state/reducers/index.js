import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Navigator from '../../routes/index.routes';
import networkStatus from './networkStatus.reducer';
import highlightText from './highlightText.reducer';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const rootReducer = combineReducers({
  nav,
  form: formReducer,
  networkStatus,
  highlightText
});

export default rootReducer;
