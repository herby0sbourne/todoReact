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

  store.dispatch(
    addTodo({
      description: 'Complete online JavaScript course',
      completed: true,
    })
  );
  store.dispatch(
    addTodo({ description: 'Jog around the park 3x', completed: false })
  );
  store.dispatch(
    addTodo({ description: '10 minutes meditation', completed: false })
  );
  store.dispatch(addTodo({ description: 'Read for 1 hour', completed: false }));
  store.dispatch(
    addTodo({ description: 'Pick up groceries', completed: false })
  );
  store.dispatch(
    addTodo({
      description: 'Complete Todo App on Frontend Mentor',
      completed: false,
    })
  );

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  return store;
};
