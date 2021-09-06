import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { setHistory } from './search-actions';

const history = createReducer([], {
  [setHistory]: (state, action) => {
    const limitItems = [...state].slice(0, 4);
    return [action.payload, ...limitItems];
  },
});

export default combineReducers({
  history,
});
