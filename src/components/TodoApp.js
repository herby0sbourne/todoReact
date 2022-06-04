import React from 'react';
import TodoForm from './TodoForm';
import AddTodo from './AddTodo';

function TodoApp() {
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Todo</h1>
        <span className="sun-icon"></span>
      </div>
      <AddTodo />
    </div>
  );
}

export default TodoApp;
