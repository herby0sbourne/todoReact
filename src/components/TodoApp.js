import React from 'react';
import AddTodo from './AddTodo';

function TodoApp() {
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Todo</h1>
        <span
          className="sun-icon"
          onClick={(e) => {
            // console.log(e.currentTarget);
            const html = document.querySelector('html');
            html.classList.add('light');
            // console.log(html);
          }}
        ></span>
      </div>
      <AddTodo />
    </div>
  );
}

export default TodoApp;
