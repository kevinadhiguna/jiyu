import React, { useState } from 'react';

// To-do: Annotate type of 'onAddTask' (error: Binding element 'onAddTask' implicitly has an 'any' type)
export function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  function handleTaskInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleAddTask() {
    setTask('');
    onAddTask(task);
  }

  return(
    <>
      <input 
        type="text" 
        placeholder="Add task" 
        value={task} 
        onChange={handleTaskInput} 
      />
      <button onClick={handleAddTask}>Add task</button>
    </>
  );
}
