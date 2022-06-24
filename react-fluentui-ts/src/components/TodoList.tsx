import React from "react";
import { Stack, Label } from "@fluentui/react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FunctionComponent = (props: any) => {
  return (
    <Stack gap={10}>
      {props.todos.length > 0 ? (
        props.todos.map((todo: any) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <Label>To-do list is empty...</Label>
      )}
    </Stack>
  );
};
