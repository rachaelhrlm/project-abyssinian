import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const StartButton: FC = () => {
  return (
    <>
      <div className="start-button">
        <span className="logo" /> <span>start</span>
      </div>
      <div className="start-button-cover"></div>
    </>
  );
};

export default observer(StartButton);
