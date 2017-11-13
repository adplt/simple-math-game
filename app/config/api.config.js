import env from './env.config';
export const SERVER_URL = env.URL;

export const endpoints = {
  LEADER_BOARD: '/leaderBoard'
};

export const mockResponses = env.fixtures || {};
