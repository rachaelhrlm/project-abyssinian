import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import WindowButton from "./WindowButton";

interface TitleBarProps {
  title: string;
}

const TitleBar: FC<TitleBarProps> = ({ title }: TitleBarProps) => {
  return (
    <div className="title-bar">
      <h1>{title}</h1>
      <div className="window-buttons-container">
        <WindowButton type="maximize" />
        <WindowButton type="minimize" />
        <WindowButton type="close" />
      </div>
    </div>
  );
};

export default observer(TitleBar);
