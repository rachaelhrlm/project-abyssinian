import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import Draggable from "react-draggable";
interface DesktopIconProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  label?: string;
}

const DesktopIcon: FC<DesktopIconProps> = ({ onClick, label }: DesktopIconProps) => {
  return (
    <Draggable>
      <div className="desktop-icon" onDoubleClick={onClick}>
        <h2>{label}</h2>
      </div>
    </Draggable>
  );
};

export default observer(DesktopIcon);
