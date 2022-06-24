import React, { useState } from "react";
import { Stack } from "@fluentui/react";
import "./App.css";

import list from "./mock-data/data";

import { TodoList } from "./components/TodoList";

export const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(list);
  
  return (
    <>
      <div className="wrapper">
        <Stack horizontalAlign="center">
          <h1>Notes app</h1>
          <Stack style={{ width: 300 }} gap={25}>
            <TodoList todos={todos} />
          </Stack>
        </Stack>
      </div>
    </>
  );
};
