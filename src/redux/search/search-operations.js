import Axios from 'axios';
import {
  searchRequest,
  searchSucces,
  searchError,
  setQuery,
  setHistory,
} from './search-actions';

const search = (query, page) => async dispatch => {
  dispatch(searchRequest());

  try {
    const { data } = await Axios.get(
      `https://api.github.com/search/repositories?q=${query}&per_page=10&page=${page}`,
    );
    dispatch(searchSucces(data));
    dispatch(setQuery(query));
  } catch (error) {
    dispatch(searchError(error.message));
  }
};

const historyPush = value => dispatch => {
  dispatch(setHistory(value));
};

export { search, historyPush };
