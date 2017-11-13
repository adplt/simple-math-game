import {createAction} from 'redux-actions';

// Network
export const SET_NETWORK_STATUS = 'SET_NETWORK_STATUS';
export const RESET_NETWORK_BAR = 'RESET_NETWORK_BAR';
export const HIGHLIGHT_NETWORK_BAR = 'HIGHLIGHT_NETWORK_BAR';

// Spinner and Modal
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

// Game
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_HIGH_SCORE = 'UPDATE_HIGH_SCORE';

// Leader Board
export const UPDATE_LEADER_BOARD = 'UPDATE_LEADER_BOARD';

/* ************************************************************************************************************************* */

// Network
export const highlightNetworkBar = createAction(HIGHLIGHT_NETWORK_BAR);
export const setNetworkStatus = createAction(SET_NETWORK_STATUS);
export const resetNetworkBar = createAction(RESET_NETWORK_BAR);

// Spinner and Modal
export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction(HIDE_SPINNER);
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

// Game
export const updateScore = createAction(UPDATE_SCORE);
export const updateHighScore = createAction(UPDATE_HIGH_SCORE);

// Leader Board
export const updateLeaderBoard = createAction(UPDATE_LEADER_BOARD);
