export interface ITask {
  id: number;
  text: string;
  done: boolean;
}

export interface ITasks extends Array<ITask> {}

export interface IAction {
  type: "ADDED" | "CHANGED" | "DELETED";
  task: ITask;
  // To-do: how to exclude 'id' and 'text'? Because they are part of ITask and perhaps there should be another approach doing this
  id: number;
  text: string;
}
