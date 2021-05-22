import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import StartButton from "./StartButton";
import WindowTab from "./WindowTab";

const TaskBar: FC = () => {
  return (
    <div className="task-bar">
      <StartButton />
      <WindowTab />
    </div>
  );
};

export default observer(TaskBar);
