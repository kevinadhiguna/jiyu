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
