import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers';

let enhancers = [];

if (typeof window !== 'undefined') {
  if ('devToolsExtension' in window) {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }
}

const enhancer = compose(applyMiddleware(thunk, promise), ...enhancers);

const initStore = () => createStore(rootReducer, {}, enhancer);

module.exports = {
  initStore
};
