type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

export type CounterAction = UpdateAction | ResetAction;
