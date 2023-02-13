import React, { useReducer } from 'react';
import { IPlayer, IAction } from '../interfaces/ReducerInput.interface';

const player: IPlayer = {
  name: "Kai Doe",
  rank: 1,
};

function reducer(state: IPlayer, action: IAction) {
  switch (action.type) {
    case "increment_rank": {
      return {
        name: state.name,
        rank: state.rank + 1,
      };
    }
    case "change_name":{
      return {
        name: action.nextName,
        rank: state.rank,
      };
    }
    default: {
      throw Error(`Unknown action type : ${action.type}`);
    }
  }
}

export function ReducerInput() {
  const [state, dispatch] = useReducer(reducer, player);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "change_name", nextName: e.target.value });
  }

  function handleIncrementRank() {
    dispatch({ type: "increment_rank", nextName: state.name });
  }

  return(
    <>
      <input type="text" value={state.name} onChange={handleNameChange} />
      <button onClick={handleIncrementRank}>+ rank</button>
      { 
        state.name && state.rank 
          ? <p>Hi {state.name}, your rank is {state.rank}</p> 
          : <p>Welcome guest!</p>
      }
    </>
  );
}
