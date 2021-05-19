import React, { FC } from "react";
import TitleBar from "./TitleBar";

const Calculator: FC = () => {
  return (
    <div className="calculator">
      <TitleBar title="Calculator" />
      <div className="calc-body"></div>
    </div>
  );
};

export default Calculator;
