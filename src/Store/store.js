import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducer/root-reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleWare = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;