import React, { Component } from 'react';
import '../css/App.css';
import Task from '../components/Task';
import faker from 'faker';
import { reorder } from '../helpers';

class App extends Component {
  state = {
    myTasks: [],
  };

  handleAddTask = () => {
    const { myTasks } = this.state;
    const newTask = { name: faker.lorem.sentence(15), taskState: 'todo' };
    const newState = [newTask, ...myTasks];

    this.setState({
      myTasks: newState,
    });
  };

  handleChangeState = (index) => {
    const { myTasks } = this.state;
    myTasks[index].taskState =
      myTasks[index].taskState === 'todo' ? 'done' : 'todo';
    this.setState({
      myTasks: myTasks,
    });
  };

  handleDelete = (index) => {
    const { myTasks } = this.state;
    myTasks.splice(index, 1);

    this.setState({
      myTasks: myTasks,
    });
  };

  drag = (ev, index) => {
    ev.dataTransfer.setData('index', index);
  };

  drop = (ev, newIndex) => {
    ev.preventDefault();
    var oldIndex = parseInt(ev.dataTransfer.getData('index'));
    const { myTasks } = this.state;
    reorder(myTasks, oldIndex, newIndex);

    this.setState({
      myTasks: myTasks,
    });
  };
  allowDrop = (ev) => {
    ev.preventDefault();
  };

  render() {
    const { myTasks } = this.state;
    return (
      <div className="App">
        <h1>React Todo List</h1>
        <button onClick={this.handleAddTask}>Add Task</button>
        <div className="list-wrapper">
          {myTasks.map((task, index) => (
            <Task
              key={'task-' + index}
              title={task.name}
              taskState={task.taskState}
              taskIndex={index}
              onChange={this.handleChangeState}
              onDelete={this.handleDelete}
              drop={this.drop}
              allowDrop={this.allowDrop}
              drag={this.drag}
            ></Task>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
