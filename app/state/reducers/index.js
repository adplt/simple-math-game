import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
// import Navigator from '../../routes/index.routes';

const nav = (state, action) => ({action
  // Navigator.router.getStateForAction(action, state)
});

const rootReducer = combineReducers({
  nav
});

export default rootReducer;
