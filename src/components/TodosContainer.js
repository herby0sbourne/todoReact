import React from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../actions/todoActions';
import todosFilter from '../selectors/todosFilter';
import TodoListItem from './TodoListItem';
import TodoOptions from './TodoOptions';

function Todos(props) {
  // console.log(props.todos);
  // console.log(props);
  const onClick = (e) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    const todoItem = e.target.classList.contains('todo-item');
    if (!todoItem) return;
    const id = e.target.dataset.id;
    props.editTodo(id);
    // const todoItem = e.target.classList.contains('todo-item');
    // if (!todoItem) return;
    // const id = e.target.closest('.todo').dataset.id;
    // props.editTodo(id);
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
      {/* todoOptions Here */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: todosFilter(state.todos, state.filters),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTodo: (id) => dispatch(editTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
