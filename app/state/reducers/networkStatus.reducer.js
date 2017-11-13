import {SET_NETWORK_STATUS} from '../actions/index.action';

const defaultState = {isConnected: true};
export default function networkStatus (state = defaultState, action) {
  switch (action.type) {
  case SET_NETWORK_STATUS: {
    return {isConnected: action.payload};
  }
  default: {
    return state;
  }
  }
}
