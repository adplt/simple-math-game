import {createAction} from 'redux-actions';

export const SET_NETWORK_STATUS = 'SET_NETWORK_STATUS';
export const SET_NETWORK_BAR = 'SET_NETWORK_BAR';

export const setNetworkStatus = createAction(SET_NETWORK_STATUS);
export const resetNetworkBar = createAction(SET_NETWORK_BAR);
