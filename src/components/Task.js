import React from 'react';
import '../css/task.css';
const classnames = require('classnames');

const Task = ({ title }) => {
  return (
    <div className="task">
      <div>{title}</div>
      <div></div>
    </div>
  );
};

export default Task;
