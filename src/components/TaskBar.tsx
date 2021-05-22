import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const TaskBar: FC = () => {
  return (
    <div className="task-bar">
      <div className="start-button">
        <span className="logo" /> <span>start</span>
      </div>
    </div>
  );
};

export default observer(TaskBar);
