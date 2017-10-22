import {createAction} from 'redux-actions';

export const SET_NETWORK_STATUS = 'SET_NETWORK_STATUS';
export const RESET_NETWORK_BAR = 'RESET_NETWORK_BAR';
export const HIGHLIGHT_NETWORK_BAR = 'HIGHLIGHT_NETWORK_BAR';

export const UPDATE_SCORE = 'UPDATE_SCORE';

export const highlightNetworkBar = createAction(HIGHLIGHT_NETWORK_BAR);
export const setNetworkStatus = createAction(SET_NETWORK_STATUS);
export const resetNetworkBar = createAction(RESET_NETWORK_BAR);

export const updateScore = createAction(UPDATE_SCORE);
