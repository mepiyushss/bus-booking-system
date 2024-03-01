// store.js

import { legacy_createStore, combineReducers } from 'redux';
import searchBarReducer from './reducers/searchBarreducer.js';

// Combine reducers
const rootReducer = combineReducers({
  searchBar: searchBarReducer,
});

// Create store
const store = legacy_createStore(rootReducer);

export default store;
