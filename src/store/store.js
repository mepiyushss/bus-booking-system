import { legacy_createStore, combineReducers } from 'redux';
import searchBarReducer from './reducers/reducer.js';


const rootReducer = combineReducers({
  searchBar: searchBarReducer,
});


const store = legacy_createStore(rootReducer);

export default store;
