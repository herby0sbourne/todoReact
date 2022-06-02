import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todoDetails = {}) => {
  const { description } = todoDetails;
  return {
    type: 'ADD_TODO',
    todo: {
      id: uuidv4(),
      description,
      completed: false,
    },
  };
};
