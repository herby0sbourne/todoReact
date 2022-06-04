import React from 'react';
import { connect } from 'react-redux';
import todoFilter from '../selectors/todosFilter';
import todoLeft from '../selectors/todosLeft';
import { clearCompleted } from '../actions/todoActions';
import {
  sortByAll,
  sortByActive,
  sortByCompleted,
} from '../actions/filterActions';

class TodoOptions extends React.Component {
  state = {
    all: true,
    active: false,
    completed: false,
  };

  onClick = (e) => {
    const clicked = e.target.textContent.toLowerCase();

    Object.entries(this.state).forEach(([key, value]) => {
      this.setState(() => {
        return {
          [key]: false,
        };
      });
    });

    if (clicked === 'all') {
      this.setState((prevState) => ({ all: !prevState.all }));
      this.props.sortByAll();
    }

    if (clicked === 'active') {
      this.setState((prevState) => ({ active: !prevState.active }));
      this.props.sortByActive();
    }

    if (clicked === 'completed') {
      this.setState((prevState) => ({ completed: !prevState.completed }));
      this.props.sortByCompleted();
    }
  };

  render() {
    return (
      <div className="todo-options">
        <div className="todo-left">{this.props.itemsLeft} items left</div>
        <div className="todo-filters" onClick={this.onClick}>
          <button className={`filter ${this.state.all && 'active'}`}>
            All
          </button>
          <button className={`filter ${this.state.active && 'active'}`}>
            Active
          </button>
          <button className={`filter ${this.state.completed && 'active'}`}>
            Completed
          </button>
        </div>
        <div className="clear-todo">
          <button className="filter" onClick={this.props.clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const todos = todoFilter(state.todos, state.filters);
  // console.log(todos.length);
  return {
    itemsLeft: todoLeft(todos).length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCompleted: () => dispatch(clearCompleted()),
    sortByAll: () => dispatch(sortByAll()),
    sortByActive: () => dispatch(sortByActive()),
    sortByCompleted: () => dispatch(sortByCompleted()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoOptions);
