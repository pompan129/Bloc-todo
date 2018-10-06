import React, { Component } from 'react';
import './App.css';
import ToDo from './components/todo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Feed dogs', isCompleted: true },
        { description: 'Empty Dishwasher', isCompleted: false },
        { description: 'Mow lawn', isCompleted: true },
        { description: 'Make bed', isCompleted: false },
        { description: 'Study for test', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });  
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }


  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) => 
        <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
      )}
      </ul>  
      <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription }  onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
