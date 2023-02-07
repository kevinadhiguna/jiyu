import { useReducer } from 'react';
import { StateType, ActionType } from '../types/ReducerForm.type';

const initialState = {
  username: '',
  email: '',
};

function reducer(state: StateType, action: ActionType) {
  switch(action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
      // throw new Error(`Unknown action type: ${action['type']}`); // <- works
      // throw new Error(`Unknown action type: ${action.type}`); // <- Error: Property 'type' does not exist on type 'never' (for more: https://github.com/microsoft/TypeScript/issues/42999)
  }
}

export const ReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <>
      <input
        type="text"
        value={state.username}
        onChange={(event) => dispatch({ type: "username", payload: event.target.value })}
      />
      <input 
        type="email"
        value={state.email}
        onChange={(event) => dispatch({ type: "email", payload: event.target.value })}
      />
    </>
  );
}

// Reference: https://devtrium.com/posts/react-typescript-how-to-type-hooks
