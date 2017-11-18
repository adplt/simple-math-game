import React from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './pages/index';
import {initStore} from './state/store';
import {Provider} from 'react-redux';
import {initializeHTTPInterceptors} from './utils/http.util';

const store = initStore();
initializeHTTPInterceptors(store);

const GameBuatDina = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default GameBuatDina;
AppRegistry.registerComponent('GameBuatDina', () => GameBuatDina);
