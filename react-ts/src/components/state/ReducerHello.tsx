import React, { useReducer } from 'react';
import { IContext, ActionType } from '../interfaces/ReducerHello.interface';

function reducer(context: IContext, action: ActionType) {
  switch (action.type) {
    case "SET_CONTEXT": {
      return {
        ...context,
        context: action.payload,
      };
    }
    case "CLEAR_CONTEXT": {
      return {
        ...context,
        context: '',
      };
    }
    default: {
      return context;
    }
  }
}

const initialContext: IContext = { input: 'World' };

export function ReducerHello() {
  const [context, dispatch] = useReducer(reducer, initialContext);

  return(
    <>
      <h1>Hello {context.input}</h1>
      <input type="text" value={context.input} />
      <button>Clear</button>
    </>
  );
}
