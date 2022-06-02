import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import TodoForm from './TodoForm';

class AddTodo extends React.Component {
  onSubmit = (todo) => {
    this.props.addTodo(todo);
    console.log('from Add todo COMP:', todo);
    console.log(this.props);
  };

  render() {
    return <TodoForm onSubmit={this.onSubmit} />;
    // return <TodoForm onSubmit={this.onSubmit} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddTodo);
