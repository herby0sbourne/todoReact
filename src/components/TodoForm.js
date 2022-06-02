import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.onSubmit({
      description: 'hello world',
      completed: false,
    });

    console.log(e.target.elements.todo.value.trim());
    e.target.elements.todo.value = '';
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {/* <div className="form-container"> */}
        {/* <form onSubmit={this.onSubmit}> */}
        <span className="circle"></span>
        <input
          name="todo"
          autoFocus={true}
          className="todo_input"
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
      // </div>
    );
  }
}
