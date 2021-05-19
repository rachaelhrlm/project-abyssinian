import { faWindowMaximize, faWindowMinimize, faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import classNames from "classnames";

interface WindowButtonProps {
  type?: "close" | "maximize" | "minimize"; //restore if maximize is true
  maximize?: boolean;
}

const WindowButton: FC<WindowButtonProps> = ({ type = "close", maximize }: WindowButtonProps) => {
  const icon =
    type === "close"
      ? faTimes
      : type === "minimize"
      ? faWindowMinimize
      : type === "maximize" && maximize
      ? faWindowRestore
      : faWindowMaximize;
  return (
    <div className="window-button">
      <span
        className={classNames({ "background-secondary": type === "close" }, { "background-primary": type !== "close" })}
      >
        <FontAwesomeIcon icon={icon} className="icon" />
      </span>
    </div>
  );
};

export default WindowButton;
