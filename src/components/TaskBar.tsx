import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const TaskBar: FC = () => {
  return (
    <div className="task-bar">
      <div className="start-button">
        <div className="cat-icon">
          <FontAwesomeIcon icon={faCat} />
        </div>
      </div>
    </div>
  );
};

export default observer(TaskBar);
