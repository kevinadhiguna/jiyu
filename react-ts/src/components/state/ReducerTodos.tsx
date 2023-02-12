import { useReducer } from 'react';
import { ITodos, IAction, ITodo } from '../types/ReducerTodos.type';

const initialTodos: ITodos = [
  {
    id: 1,
    title: "Apply to a scholarship program",
    complete: false,
  },
  {
    id: 2,
    title: "Get a letter of acceptance in the XYZ college",
    complete: false,
  },
];

function reducer(state: ITodos, action: IAction) {
  switch (action.type) {
    case "COMPLETE":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
  
    default:
      return state;
  }
}

export function ReducerTodos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  function handleComplete(todo: ITodo): void {
    dispatch({ type: "COMPLETE", id: todo.id });
  }

  return(
    <>
      {todos.map(todo => (
        <div key={todo.id}>
          <label style={ todo.complete ? {backgroundColor: 'green'} : {backgroundColor: 'orange'} }>
            <input 
              type="checkbox" 
              checked={todo.complete} 
              // onChange={handleComplete(todo)} // <- Error: Type 'void' is not assignable to type '((event: ChangeEvent<HTMLInputElement>) => void)
              onChange={() => handleComplete(todo)} 
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
