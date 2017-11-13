import {UPDATE_HIGH_SCORE} from '../actions/index.action';

export default function updateScore (state = 0, action) {
  switch (action.type) {
  case UPDATE_HIGH_SCORE: {
    return action.payload;
  }
  default: {
    return state;
  }
  }
}
