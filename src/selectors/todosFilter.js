import { createSelector } from '@reduxjs/toolkit';

const selectTodos = (state) => state.todos;
const selectFilters = (state) => state.filters;

const todosFilter = createSelector(
  [selectTodos, selectFilters],
  (todos, filters) => {
    const { sortBy } = filters;
    // console.log(sortBy);
    return todos.filter((todo) => {
      if (sortBy === 'all') {
        return todo.completed === true || todo.completed === false;
      }

      if (sortBy === 'active') {
        return todo.completed === false;
      }

      if (sortBy === 'completed') {
        return todo.completed === true;
      }
      // console.log(todo);
    });
  }
);

/* 
// Original funtion call
const todosFilter = (todos, filters) => {
  const { sortBy } = filters;
  // console.log(sortBy);
  return todos.filter((todo) => {
    if (sortBy === 'all') {
      return todo.completed === true || todo.completed === false;
    }

    if (sortBy === 'active') {
      return todo.completed === false;
    }

    if (sortBy === 'completed') {
      return todo.completed === true;
    }
    // console.log(todo);
  });
}; */

export default todosFilter;
