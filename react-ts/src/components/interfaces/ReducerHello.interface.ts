export interface IContext {
  input: string;
}

interface ISetContextAction {
  type: 'SET_CONTEXT';
  payload: string;
}

interface IClearContextAction {
  type: 'CLEAR_CONTEXT';
}

// To-do: How to merge interfaces that share a same property? (in this case, 'type' property)
// interface IAction extends ISetContextAction, IClearContextAction {}

// -- Some temporary workarounds --
// (1)
export interface IAction {
  type: 'SET_CONTEXT' | 'CLEAR_CONTEXT';
  payload?: string;
}

// (2)
type ActionType = 
  | { type: 'SET_CONTEXT', payload: string }
  | { type: 'CLEAR_CONTEXT' };

// (3) (But this forces one to include 'payload' property)
// Reference: https://stackoverflow.com/a/75458439/14418391
export interface IAction2 extends Omit<ISetContextAction, 'type'>, Omit<IClearContextAction, 'type'> {
  type: 'SET_CONTEXT' | 'CLEAR_CONTEXT';
}
