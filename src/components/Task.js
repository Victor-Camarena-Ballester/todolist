import React from 'react';
import '../css/task.css';

const Task = ({
  title,
  taskState,
  taskIndex,
  onChange,
  onDelete,
  drop,
  allowDrop,
  drag,
}) => {
  const classState = 'task ' + taskState;
  const buttonMarkText = taskState === 'todo' ? 'Done' : 'Todo';
  return (
    <div
      draggable="true"
      onDrop={(event) => {
        drop(event, taskIndex);
      }}
      onDragOver={(event) => {
        allowDrop(event);
      }}
      onDragStart={(event) => {
        drag(event, taskIndex);
      }}
      className={classState}
    >
      <div>
        {taskIndex} - {title}
      </div>
      <div>
        <button
          onClick={() => {
            onDelete(taskIndex);
          }}
        >
          Delete Task
        </button>
        <button onClick={() => onChange(taskIndex)}>
          Marc as {buttonMarkText}
        </button>
      </div>
    </div>
  );
};

export default Task;
