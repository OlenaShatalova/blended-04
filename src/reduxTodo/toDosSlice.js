import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addTodos(state, { payload }) {
      state.items.push(payload);
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(item => {
        return item.id !== payload;
      });
    },
    changeCurrentTodo(state, { payload }) {
      state.currentTodo = payload;
    },
    editTodo(state, { payload }) {
      state.items = state.items.map(item =>
        item.id === state.currentTodo.id ? { ...item, text: payload } : item,
      );
      state.currentTodo = null;
    },
  },
});

export const selectTodos = state => state.todos.items;
export const selectCurrentTodo = state => state.todos.currentTodo;
export const todosReducer = todosSlice.reducer;
export const { addTodos, deleteTodo, changeCurrentTodo, editTodo } =
  todosSlice.actions;
