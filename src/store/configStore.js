import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoReducers';
import filtersReducer from '../reducers/filterReducers';

import { addTodo } from '../actions/todoActions';

export default () => {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
      filters: filtersReducer,
    },
  });

  store.dispatch(addTodo({ description: 'Clean kitchen', completed: false }));
  store.dispatch(addTodo({ description: 'Wash Car', completed: true }));
  store.dispatch(addTodo({ description: 'Clean House', completed: false }));

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  return store;
};
