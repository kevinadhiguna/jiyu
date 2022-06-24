import React from "react";
import { Stack } from "@fluentui/react";
import "./App.css";

export const App: React.FunctionComponent = () => {
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
