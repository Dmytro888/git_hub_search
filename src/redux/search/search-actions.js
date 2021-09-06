import { createAction } from '@reduxjs/toolkit';

const searchRequest = createAction('search/searchRequest');
const searchSucces = createAction('search/searchSuccess');
const searchError = createAction('search/searchError');

const setQuery = createAction('search/setQuery');
const setHistory = createAction('search/setHistory');

export { searchRequest, searchSucces, searchError, setQuery, setHistory };
