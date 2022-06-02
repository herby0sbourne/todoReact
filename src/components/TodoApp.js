import React from 'react';
import TodoForm from './TodoForm';
import AddTodo from './AddTodo';

function TodoApp() {
  return (
    <div className="container">
      <div className="header">
        <h1>Todo</h1>
        <span>icon go here</span>
      </div>
      <AddTodo />
    </div>
    // <div>
    //   <input type="text" />
    // </div>
  );
}

export default TodoApp;
