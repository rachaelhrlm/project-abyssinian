import classNames from "classnames";
import React, { FC, ReactNode } from "react";

interface KeypadButtonProps {
  children: ReactNode;
  type?: "primary" | "secondary";
}

const KeypadButton: FC<KeypadButtonProps> = ({ children, type = "primary" }: KeypadButtonProps) => {
  return (
    <div className="keypad-button">
      <span
        className={classNames({ "keypad-primary": type === "primary" }, { "keypad-secondary": type === "secondary" })}
      >
        {children}
      </span>
    </div>
  );
};

export default KeypadButton;
