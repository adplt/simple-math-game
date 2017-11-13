import {UPDATE_LEADER_BOARD} from '../actions/index.action';

export default function updateScore (state = [], action) {
  switch (action.type) {
  case UPDATE_LEADER_BOARD: {
    return action.payload;
  }
  default: {
    return state;
  }
  }
}
