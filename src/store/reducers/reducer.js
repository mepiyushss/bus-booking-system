import { SET_FROM, SET_TO, SET_DATE, SET_AC, SET_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY } from './actions.js';


const initialState = {
  from: '',
  to: '',
  date: '',
  AC: '',
  searchHistory: [],
};


const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FROM:
      return { ...state, from: action.payload };
    case SET_TO:
      return { ...state, to: action.payload };
    case SET_DATE:
      return { ...state, date: action.payload };
    case SET_AC:
      return { ...state, AC: action.payload };
    case SET_SEARCH_HISTORY:
      return {...state, searchHistory: action.payload};
    case CLEAR_SEARCH_HISTORY:
      return { ...state, searchHistory: []};
    default:
      return state;
  }
};

export default searchBarReducer;
