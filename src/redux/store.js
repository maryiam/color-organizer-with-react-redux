import { createStore, combineReducers } from 'redux';
import { colors, sort } from './reducers';
import data from '../lib/data';

const Store = createStore(
  combineReducers({ colors, sort }),
  data
);

export default Store;
