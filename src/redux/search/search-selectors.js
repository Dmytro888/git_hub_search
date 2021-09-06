const getLoading = state => state.data.loading;
const getResult = state => state.data.result.items;
const getCount = state => state.data.result.total_count;
const getQuery = state => state.data.query;
const getHistory = state => state.history.history;

export { getLoading, getResult, getCount, getQuery, getHistory };
