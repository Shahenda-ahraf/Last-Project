import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slicemood';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;