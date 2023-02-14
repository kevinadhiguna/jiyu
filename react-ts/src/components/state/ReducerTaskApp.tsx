import { useReducer } from "react";
import { ITasks, IAction } from '../interfaces/ReducerTaskApp.interface';

import { AddTask } from '../AddTask';
import { TaskList } from '../TaskList';

const nextId: number = 4;
const initialTasks: ITasks = [
  {
    id: 1,
    text: 'Take part in Royal Madrid Youth Camp',
    done: false,
  },
  {
    id: 2,
    text: 'Become Royal Madrid Youth Camp MVP',
    done: false,
  },
  {
    id: 3,
    text: 'Get into the first team and score goals',
    done: false,
  }
];

function taskReducer(tasks: ITasks, action: IAction) {
  switch (action.type) {
    case "ADDED": {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false,
      }];
    }
    case "CHANGED": {
      return tasks.map(task => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "DELETED": {
      return tasks.filter(task => task.id !== action.id);
    }
    default: {
      throw Error(`Unknown action type : ${action.type}`);
    }
  }
}

export function ReducerTaskApp() {
  const [tasks, disptach] = useReducer(taskReducer, initialTasks);

  // To-do: 
  // (1) Argument of type '<ELEMENT>' is not assignable to parameter of type 'IAction'
  // (2) Parameter 'text' implicitly has an 'any' type
  function handleAddTask(text) {
    disptach({
      type: 'ADDED',
      id: nextId++,
      text,
    });
  }

  // To-do:
  // (1) Argument of type '<ELEMENT>' is not assignable to parameter of type 'IAction'
  // (2) Parameter 'task' implicitly has an 'any' type
  function handleChangeTask(task) {
    disptach({
      type: 'CHANGED',
      task,
    });
  }

  // To-do:
  // (1) Argument of type '<ELEMENT>' is not assignable to parameter of type 'IAction'
  // (2) Parameter 'taskId' implicitly has an 'any' type
  function handleDeleteTask(taskId) {
    disptach({
      type: 'DELETED',
      id: taskId,
    });
  }

  return(
    <>
      <h2>useReducer - Road to Royal Madrid</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        onChangeTask={handleChangeTask} 
        onDeleteTask={handleDeleteTask} 
      />
    </>
  );
}
