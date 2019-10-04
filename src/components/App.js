import React, { Component } from 'react';
import '../css/App.css';
import Task from '../components/Task';
import faker from 'faker';

class App extends Component {
  state = {
    myTasks: [],
  };

  handleAddTask = () => {
    const { myTasks } = this.state;
    const newTask = faker.lorem.sentence(40);
    const newState = [newTask, ...myTasks];

    this.setState({
      myTasks: newState,
    });
  };

  render() {
    const { myTasks } = this.state;
    return (
      <div className="App">
        <h1>React Todo List</h1>
        <button onClick={this.handleAddTask}>Add Task</button>
        <div className="list-wraper">
          {myTasks.map((task) => (
            <Task title={task}></Task>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
