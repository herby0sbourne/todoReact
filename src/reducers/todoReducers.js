const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];

    // case 'EDIT_TODO'
    //   return

    default:
      return state;
  }
};

export default todoReducer;
