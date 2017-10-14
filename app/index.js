import React from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './pages/index';
import {initStore} from './state/store';
import {Provider} from 'react-redux';

const store = initStore();

const GameBuatDina = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default GameBuatDina;
AppRegistry.registerComponent('GameBuatDina', () => GameBuatDina);
