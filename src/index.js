import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const AddTask = ({ addTask }) => {
  const [value, updateValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (value !== "") {
      addTask(value)
      updateValue("")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={value}
        placeholder="Enter your task todo"
        onChange={e => updateValue(e.target.value)} />
      <button type="submit"><i class="material-icons">add</i></button>
    </form>
  );
};





const ToDoList = () => {
  const addTask = text => updateTask([...tasks, { text }]);
  const [tasks, updateTask] = useState([
    {
      text: "wake-up",
      isCompleted: false

    },
    {
      text: "Breakfast",
      isCompleted: false
    },
    {
      text: "Workout",
      isCompleted: false
    }
  ]);
  const toggleTask = index => {
    const newTask = [...tasks];
    console.log(newTask[index].isCompleted);
    if (newTask[index].isCompleted) {
      newTask[index].isCompleted = false;
    }
    else {
      newTask[index].isCompleted = true;
    }
    updateTask(newTask);

  }
  const removeTask = index => {
    const newTask = [...tasks]
    newTask.splice(index, 1);
    updateTask(newTask);
  }

  return (
    <div className="list-of-tasks-todo">
      {tasks.map((task, index) => (
        <div key={index} className="task-status">
          <span
            onClick={() => toggleTask(index)}
            className={task.isCompleted ? "task-name completed-task" : "task-name"}>
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}><i class="material-icons">delete</i>
          </button>
        </div>
      ))}
      <AddTask addTask={addTask} />
    </div>
  );
}
ReactDOM.render(<ToDoList />, document.getElementById('root'));
