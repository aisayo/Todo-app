// responsible for maintaining all our ToDo domain 

//display all of our todo's
// display form 


// how am i going keep track of to do items
// an array, initialize state that contains all the todo objects

import React, { Component } from 'react';

import ToDoForm from './ToDoForm'

class ToDoContainer extends Component {

    state = {
        todos: []
    }

    //a prop 

    addToDo = (todo) => {
        console.log('todo', todo)
        // add new to do to array 
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }


    render() {
        console.log(this.state.todos)
        return (
            <div>
                ToDo's
                < ToDoForm addToDo={this.addToDo}/>
            </div>
        );
    }
}

export default ToDoContainer;

