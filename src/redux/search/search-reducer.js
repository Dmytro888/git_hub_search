import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  searchRequest,
  searchSucces,
  searchError,
  setQuery,
} from './search-actions';

const result = createReducer([], {
  [searchSucces]: (_, action) => action.payload,
});

const query = createReducer([], {
  [setQuery]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [searchRequest]: () => true,
  [searchSucces]: () => false,
  [searchError]: () => false,
});

export default combineReducers({
  result,
  query,
  loading,
});
