import React, { useState } from "react";
import { Stack } from "@fluentui/react";
import "./App.css";
import list from "./mock-data/data";

export const App: React.FunctionComponent = () => {
  const [todo, setTodo] = useState(list);
  
  return (
    <>
      <div className="wrapper">
        <Stack horizontalAlign="center">
          <h1>Notes app</h1>
        </Stack>
      </div>
    </>
  );
};
