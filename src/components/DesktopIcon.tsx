import React, { FC } from "react";
import Draggable from "react-draggable";
import calculatorStore from "../stores";
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

export default DesktopIcon;
