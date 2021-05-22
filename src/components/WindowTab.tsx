import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import calculatorStore from "../stores";

const WindowTab: FC = () => {
  if (calculatorStore.isHidden) {
    return null;
  }
  return (
    <div
      className={classNames("window-tab", { "window-tab-active": !calculatorStore.isMinimised })}
      onClick={() => calculatorStore.minimise()}
    >
      <div className="icon" />
      <span>Calculator</span>
    </div>
  );
};

export default observer(WindowTab);
