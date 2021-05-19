import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Calculator: FunctionComponent = () => {
  return (
    <div className="calculator">
      <div className="calc-header">
        <h1>Calculator</h1>
        <div className="calc-menu-button">
          <FontAwesomeIcon icon={faTimes} className="icon" />
        </div>
      </div>
      <div className="calc-body"></div>
    </div>
  );
};

export default Calculator;
