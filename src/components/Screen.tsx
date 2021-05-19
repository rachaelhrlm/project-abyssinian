import { observer } from "mobx-react-lite";
import React, { FC } from "react";

interface ScreenProps {
  previousOperand?: string;
  currentOperand?: string;
  operator?: string;
}

const Screen: FC<ScreenProps> = ({ previousOperand, currentOperand, operator }: ScreenProps) => {
  return (
    <div className="screen">
      <span className="current-operand">{currentOperand}</span>
      <span className="operator">{operator}</span>
      <span className="previous-operand">{previousOperand}</span>
    </div>
  );
};

export default observer(Screen);
