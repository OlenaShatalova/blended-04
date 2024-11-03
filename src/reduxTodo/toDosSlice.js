import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodos(state, { payload }) {
      state.items.push(payload);
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(item => {
        return item.id !== payload;
      });
    },
  },
});

export const selectTodos = state => state.todos.items;

export const todosReducer = todosSlice.reducer;
export const { addTodos, deleteTodo } = todosSlice.actions;
