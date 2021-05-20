import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import calculatorStore from "../stores";

interface ScreenProps {
  previousOperand?: string;
  currentOperand?: string;
  operator?: string;
}

const Screen: FC<ScreenProps> = ({ previousOperand, currentOperand, operator }: ScreenProps) => {
  return (
    <div className={classNames("screen", { "maximize-screen": calculatorStore.isMaximized })}>
      <div className="previous">
        <span className="previous-operand">{previousOperand}</span>
        <span className="operator">{operator}</span>
      </div>
      <div className="current">
        <span className="current-operand">{currentOperand}</span>
      </div>
    </div>
  );
};

export default observer(Screen);
