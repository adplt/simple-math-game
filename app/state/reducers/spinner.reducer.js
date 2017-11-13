import {SHOW_SPINNER, HIDE_SPINNER} from '../actions/index.action';

export default function highlightText (state = false, action) {
  switch (action.type) {
  case SHOW_SPINNER: {
    return true;
  }
  case HIDE_SPINNER: {
    return false;
  }
  default: {
    return state;
  }
  }
}
