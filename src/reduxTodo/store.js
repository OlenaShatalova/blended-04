import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './toDosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
export default store;
