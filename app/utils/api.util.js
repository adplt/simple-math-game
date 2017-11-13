import * as Http from './http.util';

export const getLeaderBoardAPI = (payload) => Http.get('LEADER_BOARD', payload);
