import {SHOW_MODAL, HIDE_MODAL} from '../actions/index.action';

export default function highlightText (state = false, action) {
  switch (action.type) {
  case SHOW_MODAL: {
    return true;
  }
  case HIDE_MODAL: {
    return false;
  }
  default: {
    return state;
  }
  }
}
