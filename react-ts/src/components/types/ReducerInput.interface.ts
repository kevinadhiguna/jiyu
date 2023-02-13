export interface IPlayer {
  name: string;
  rank: number;
}

export interface IAction {
  type: "increment_rank" | "change_name";
  nextName: string;
}
