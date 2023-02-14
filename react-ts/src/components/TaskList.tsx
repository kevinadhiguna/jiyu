import { useState } from 'react';

// To-do: Annotate type of 'task', 'onChange', and 'onDelete'
//    (error: Binding element 'task' / 'onChange' / 'onDelete' implicitly has an 'any' type)
function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input value={task.test} onChange={e => {
          onChange({
            ...task,
            text: e.target.value,
          });
        }} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return(
    <label>
      <input 
        type="checkbox" 
        checked={task.done} 
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }} 
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}

// To-do: Annotate type of 'tasks', 'onChangeTask', and 'onDeleteTask'
//    (error: Binding element 'tasks' / 'onChangeTask' / 'onDeleteTask' implicitly has an 'any' type)
export function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return(
    <ul>
      {/* To-do: Annotate type of 'task' */}
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}
