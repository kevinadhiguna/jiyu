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
