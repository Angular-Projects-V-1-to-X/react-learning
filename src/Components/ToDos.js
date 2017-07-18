import React, { Component } from 'react';
import ToDoItem from './ToDoItem';


class ToDos extends Component {

  render() {
    let toDoItems;
    if(this.props.todos){
      toDoItems = this.props.todos.map(todo => {
        //console.log(project);
        return (
          <ToDoItem key={todo.title} todo={todo} />
        )
      });
    }

    console.log(this.props);
    return (
      <div className="ToDos">
        <h3>ToDo List</h3>
        {toDoItems}
      </div>
    );
  }
}

ToDos.propTypes = {
  todos: React.PropTypes.array
}

export default ToDos;
