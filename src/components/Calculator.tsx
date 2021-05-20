import React, { FC } from "react";
import { faDivide, faEquals, faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import KeypadButton from "./KeypadButton";
import Screen from "./Screen";
import TitleBar from "./TitleBar";
import calculatorStore from "../stores";
import classNames from "classnames";

const Calculator: FC = () => {
  if (calculatorStore.isHidden) {
    return null;
  }
  return (
    <div className={classNames("calculator", { "maximize-window": calculatorStore.isMaximized })}>
      <TitleBar title="Calculator" />
      <div className="calc-body">
        <div className="calc-body-container">
          <Screen
            currentOperand={calculatorStore.currentOperand}
            previousOperand={calculatorStore.previousOperand}
            operator={calculatorStore.displayOperator}
          />
          <div className={classNames("keypad-top", { "maximize-keypad-top": calculatorStore.isMaximized })}>
            <KeypadButton value="AC" onClick={calculatorStore.clear} />
            <KeypadButton value="DEL" onClick={calculatorStore.delete} />
          </div>
          <div className={classNames("keypad", { "maximize-keypad": calculatorStore.isMaximized })}>
            <KeypadButton value="1" onClick={() => calculatorStore.append("1")} />
            <KeypadButton value="2" onClick={() => calculatorStore.append("2")} />
            <KeypadButton value="3" onClick={() => calculatorStore.append("3")} />
            <KeypadButton
              type="secondary"
              value={<FontAwesomeIcon icon={faDivide} />}
              onClick={() => calculatorStore.setOperator("/")}
            />

            <KeypadButton value="4" onClick={() => calculatorStore.append("4")} />
            <KeypadButton value="5" onClick={() => calculatorStore.append("5")} />
            <KeypadButton value="6" onClick={() => calculatorStore.append("6")} />
            <KeypadButton
              type="secondary"
              value={<FontAwesomeIcon icon={faTimes} />}
              onClick={() => calculatorStore.setOperator("*")}
            />

            <KeypadButton value="7" onClick={() => calculatorStore.append("7")} />
            <KeypadButton value="8" onClick={() => calculatorStore.append("8")} />
            <KeypadButton value="9" onClick={() => calculatorStore.append("9")} />
            <KeypadButton
              type="secondary"
              value={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => calculatorStore.setOperator("+")}
            />

            <KeypadButton value="." onClick={() => calculatorStore.append(".")} />
            <KeypadButton value="0" onClick={() => calculatorStore.append("0")} />
            <KeypadButton
              type="secondary"
              value={<FontAwesomeIcon icon={faEquals} />}
              onClick={() => calculatorStore.compute()}
            />

            <KeypadButton
              type="secondary"
              value={<FontAwesomeIcon icon={faMinus} onClick={() => calculatorStore.setOperator("-")} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Calculator);
