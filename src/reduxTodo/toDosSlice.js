import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodos(state, { payload }) {
      state.items.push(payload);
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodos } = todosSlice.actions;
