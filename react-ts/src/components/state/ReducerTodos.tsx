import { ITodos, IAction } from '../types/ReducerTodos.type';

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
