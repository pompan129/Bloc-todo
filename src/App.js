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
      ]
    };
  }


  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) => 
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
      )}
      </ul>  
      </div>
    );
  }
}

export default App;
