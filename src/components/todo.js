import React, { Component } from 'react';



class ToDo extends Component {
    render() {
      return (
        <li style={{border:"1px solid #ccc",width:"300px"}}>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <span>{ this.props.description }</span>
          <button onClick={this.props.deleteTodo} style={{float:"right"}}>X</button>
        </li>
      );
    }
  }

  export default ToDo;