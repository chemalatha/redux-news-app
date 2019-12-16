import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import RootReducer from '../reducers';

let store = createStore(RootReducer,applyMiddleware(promiseMiddleware));

export default store;
