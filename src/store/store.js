import { configureStore } from '@reduxjs/toolkit';
import dateReducer from '../utils/Slice';

export const store = configureStore({
  reducer: { dateReducer },
});
console.log(store.getState());
