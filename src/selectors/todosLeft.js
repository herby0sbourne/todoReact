const todosLeft = (todos) => {
  return todos.filter((todo) => {
    return todo.completed !== true;
  });
};

export default todosLeft;
