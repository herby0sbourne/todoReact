import React from 'react';
import { connect } from 'react-redux';
import { editTodo, removeTodo } from '../actions/todoActions';
import todosFilter from '../selectors/todosFilter';
import TodoListItem from './TodoListItem';
import TodoOptions from './TodoOptions';

function Todos(props) {
  const onClick = (e) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    const removeTodo = e.target.classList.contains('remove');
    const todoItem = e.target.classList.contains('todo-item');

    if (todoItem) {
      const id = e.target.dataset.id;
      props.editTodo(id);
    }

    if (removeTodo) {
      const id = e.target.previousElementSibling.dataset.id;
      props.removeTodo(id);
    }
  };

  return (
    <div className="todo-container">
      <ul className="todo-list" onClick={onClick}>
        {props.todos.map(
          (
            /** @type {JSX.IntrinsicAttributes & { id: any; description: String; completed: Boolean; }} */ todo
          ) => {
            return <TodoListItem key={todo.id} {...todo} />;
          }
        )}
      </ul>
      <TodoOptions />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: todosFilter(state),
    // todos: todosFilter(state.todos, state.filters),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTodo: (id) => dispatch(editTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
