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
};

export default todosFilter;
