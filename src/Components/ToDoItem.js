import React, { Component } from 'react';


class ToDoItem extends Component {

  render() {
    console.log(this.props);
    return (
      <li className="ToDoItem">
        <strong>(ID - {this.props.todo.id})</strong> : {this.props.todo.title}
      </li>
    );
  }
}

ToDoItem.propTypes = {
  todo: React.PropTypes.object
}
export default ToDoItem;
