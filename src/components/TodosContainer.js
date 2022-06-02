import React from 'react';
import { connect } from 'react-redux';
import todosFilter from '../selectors/todosFilter';
import TodoListItem from './TodoListItem.js';

function Todos(props) {
  console.log(props.todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => {
          return <TodoListItem key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: todosFilter(state.todos, state.filters),
  };
};

export default connect(mapStateToProps)(Todos);
