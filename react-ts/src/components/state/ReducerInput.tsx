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
