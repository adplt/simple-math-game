import {UPDATE_SCORE} from '../actions/index';

export default function updateScore (state = 0, action) {
  switch (action.type) {
  case UPDATE_SCORE: {
    return action.payload;
  }
  default: {
    return state;
  }
  }
}
