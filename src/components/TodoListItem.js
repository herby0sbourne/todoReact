import React from 'react';

function TodoListItem({ id, description, completed }) {
  console.log(id, description, completed);
  return (
    <div className="todo">
      <div className="circle"></div>
      <ul className="todo-item">{description}</ul>
      <div className="remove"></div>
    </div>
  );
}

export default TodoListItem;
