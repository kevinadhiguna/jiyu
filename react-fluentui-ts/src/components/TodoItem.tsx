import React from "react";
import { Stack, Label } from "@fluentui/react";

export const TodoItem: React.FunctionComponent = (props: any) => {
  return(
    <Stack>
      <Stack horizontalAlign="center" verticalAlign="center">
        <Label>{props.todo.name}</Label>
      </Stack>
    </Stack>
  );
}
