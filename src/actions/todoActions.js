import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todoDetails = {}) => {
  const { description, completed = false } = todoDetails;
  return {
    type: 'ADD_TODO',
    todo: {
      id: uuidv4(),
      description,
      completed,
    },
  };
};

export const editTodo = (id) => {
  return {
    type: 'EDIT_TODO',
    id,
  };
};

export const clearCompleted = () => {
  return {
    type: 'CLEAR_COMPLETED',
  };
};
