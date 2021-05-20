import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { FC, ReactNode } from "react";
import calculatorStore from "../stores";

interface KeypadProps {
  children?: ReactNode;
  topButtons?: ReactNode;
}
const Keypad: FC<KeypadProps> = ({ children, topButtons }: KeypadProps) => {
  return (
    <>
      <div className={classNames("keypad-top", { "maximize-keypad-top": calculatorStore.isMaximized })}>
        {topButtons}
      </div>
      <div className={classNames("keypad", { "maximize-keypad": calculatorStore.isMaximized })}>{children}</div>
    </>
  );
};

export default observer(Keypad);
