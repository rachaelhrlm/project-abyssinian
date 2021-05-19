import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface TitleBarProps {
  title: string;
}

const TitleBar: FC<TitleBarProps> = ({ title }: TitleBarProps) => {
  return (
    <div className="title-bar">
      <h1>{title}</h1>
      <div className="calc-menu-button">
        <FontAwesomeIcon icon={faTimes} className="icon" />
      </div>
    </div>
  );
};

export default TitleBar;
