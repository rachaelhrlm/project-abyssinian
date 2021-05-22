import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import calculatorStore from "../stores";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface WindowButtonProps {
  type?: "close" | "maximize" | "minimize";
}

const WindowButton: FC<WindowButtonProps> = ({ type = "close" }: WindowButtonProps) => {
  const icon: IconDefinition = calculatorStore.getWindowButtonIcon(type);
  const onClick = calculatorStore.getWindowButtonOnClick(type);

  return (
    <div className="window-button" onClick={onClick}>
      <span
        className={classNames({ "background-secondary": type === "close" }, { "background-primary": type !== "close" })}
      >
        <FontAwesomeIcon icon={icon} className="icon" />
      </span>
      {type === "close" && <span className="background-secondary-cover" />}
    </div>
  );
};

export default observer(WindowButton);
