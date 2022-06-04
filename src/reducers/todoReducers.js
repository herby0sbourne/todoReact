const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // return [action.todo, ...state];
      return [...state, action.todo]; //// Original

    case 'EDIT_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          // console.log(todo.completed);
          // console.log(!todo.completed);
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

    case 'CLEAR_COMPLETED':
      return state.filter((todo) => {
        return todo.completed !== true;
      });

    default:
      return state;
  }
};

export default todoReducer;
