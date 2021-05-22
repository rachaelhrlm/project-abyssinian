import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import Clock from "./Clock";
import StartButton from "./StartButton";
import WindowTab from "./WindowTab";

const TaskBar: FC = () => {
  return (
    <div className="task-bar">
      <div className="main">
        <StartButton />
        <WindowTab />
      </div>
      <Clock />
    </div>
  );
};

export default observer(TaskBar);
