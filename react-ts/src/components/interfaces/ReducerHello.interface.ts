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
// (1) (This could be abysmal as payload is set to optional even though type is 'SET_CONTEXT'. Better clear this off!)
// export interface IAction {
//   type: 'SET_CONTEXT' | 'CLEAR_CONTEXT';
//   payload?: string;
// }

// (2) (These are possibly the way to go as it meets requirements)
export type ActionType = 
  | { type: 'SET_CONTEXT', payload: string }
  | { type: 'CLEAR_CONTEXT' };
export type ActionType2 = ISetContextAction | IClearContextAction;

// (3) (But this forces one to include 'payload' property even though type is 'CLEAR_CONTEXT'. Not really the best option)
// Reference: https://stackoverflow.com/a/75458439/14418391
// export interface IAction2 extends Omit<ISetContextAction, 'type'>, Omit<IClearContextAction, 'type'> {
//   type: 'SET_CONTEXT' | 'CLEAR_CONTEXT';
// }
