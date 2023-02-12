export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

// an Array of Objects (for more: https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects)
export interface ITodos extends Array<ITodo> {}
