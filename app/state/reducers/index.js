import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Navigator from '../../routes/index.routes';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const rootReducer = combineReducers({
  nav,
  form: formReducer
});

export default rootReducer;
