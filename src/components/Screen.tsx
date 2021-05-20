import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import calculatorStore from "../stores";

const Screen: FC = () => {
  return (
    <div className={classNames("screen", { "maximize-screen": calculatorStore.isMaximized })}>
      <div className="previous">
        <span>{calculatorStore.previousOperand}</span>
        <span>{calculatorStore.operator}</span>
      </div>
      <div className="current">
        <span>{calculatorStore.currentOperand}</span>
      </div>
    </div>
  );
};

export default observer(Screen);
