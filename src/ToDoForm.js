import React, { Component } from "react";

class ToDoForm extends Component {
  constructor() {
    super();

    //what is state?? information that can be changed/data
    //what do i want to ask for
    this.state = {
      name: "",
      completed: false,
      deadline: "",
    };
  }

  handleSubmit = (e) => {
     e.preventDefault()
     this.props.addToDo(this.state)
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <br />
        <label>Completed:</label>

        <input
          value={this.state.completed}
          onChange={this.handleChange}
          name="completed"
        />
        <br />

        <label>Deadline:</label>

        <input
          value={this.state.deadline}
          onChange={this.handleChange}
          name="deadline"
          type="date"
        />
        <br />

        <input type="submit" value="Create ToDo" />
      </form>
    );
  }
}

export default ToDoForm;

// forms in react
// user input fields => state
// submit the form
// like javascript not quite
// controlled component *****
