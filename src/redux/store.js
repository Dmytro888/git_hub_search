import { configureStore } from '@reduxjs/toolkit';
import data from './search/search-reducer';
import history from './search/history-reducer';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const historyPersistConfig = {
  key: 'history',
  storage,
  blacklist: ['_persist'],
};

const store = configureStore({
  reducer: {
    data,
    history: persistReducer(historyPersistConfig, history),
  },
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
