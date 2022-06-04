import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props);
    this.props.onSubmit({
      description: e.target.elements.todo.value.trim(),
    });
    e.target.elements.todo.value = '';
  };

  render() {
    return (
      <div className="form-container">
        <form autoComplete="off" onSubmit={this.onSubmit}>
          <span className="circle"></span>
          <input
            name="todo"
            autoFocus={true}
            // autoComplete="off"
            className="todo-input"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </div>
    );
  }
}
