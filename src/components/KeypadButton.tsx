import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { FC, ReactNode } from "react";
import calculatorStore from "../stores";

interface KeypadButtonProps {
  value: ReactNode;
  type?: "primary" | "secondary";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const KeypadButton: FC<KeypadButtonProps> = ({ value, type = "primary", onClick }: KeypadButtonProps) => {
  return (
    <div className="keypad-button" onClick={onClick}>
      <span
        className={classNames(
          { "keypad-primary": type === "primary" },
          { "keypad-secondary": type === "secondary" },
          { maximize: calculatorStore.isMaximized }
        )}
      >
        {value}
      </span>
    </div>
  );
};

export default observer(KeypadButton);
