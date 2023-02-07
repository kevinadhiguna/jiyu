export type StateType = {
  username: string;
  email: string;
};

type UsernameActionType = {
  type: "username";
  payload: string;
};

type EmailActionType = {
  type: "email";
  payload: string;
};

type ResetActionType = {
  type: "reset";
};

export type ActionType = UsernameActionType | EmailActionType | ResetActionType;
