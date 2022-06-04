import React from 'react';

function TodoListItem({ id, description, completed }) {
  // console.log(id, description, completed);

  const status = completed === true ? 'completed' : '';

  return (
    <div className={`todo ${status}`}>
      <div className={`circle ${status}`}></div>
      <li className="todo-item" data-id={id}>
        {description}
      </li>
      <div className="remove hidden">{/* addRemove onClick */}</div>
    </div>
  );
}

export default TodoListItem;
