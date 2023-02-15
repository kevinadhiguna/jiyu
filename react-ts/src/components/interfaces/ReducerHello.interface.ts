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
