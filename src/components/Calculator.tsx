import React, { FC } from "react";
import { faDivide, faEquals, faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import KeypadButton from "./KeypadButton";
import Screen from "./Screen";
import TitleBar from "./TitleBar";
import calculatorStore from "../stores";

const Calculator: FC = () => {
  return (
    <div className="calculator">
      <TitleBar title="Calculator" />
      <div className="calc-body">
        <Screen currentOperand={calculatorStore.currentOperand} />
        <div className="keypad-top">
          <KeypadButton value="AC" onClick={calculatorStore.clear} />
          <KeypadButton value="DEL" onClick={calculatorStore.delete} />
        </div>
        <div className="keypad">
          <KeypadButton value="1" onClick={() => calculatorStore.append("1")} />
          <KeypadButton value="2" onClick={() => calculatorStore.append("2")} />
          <KeypadButton value="3" onClick={() => calculatorStore.append("3")} />
          <KeypadButton type="secondary" value={<FontAwesomeIcon icon={faDivide} />} />

          <KeypadButton value="4" onClick={() => calculatorStore.append("4")} />
          <KeypadButton value="5" onClick={() => calculatorStore.append("5")} />
          <KeypadButton value="6" onClick={() => calculatorStore.append("6")} />
          <KeypadButton type="secondary" value={<FontAwesomeIcon icon={faTimes} />} />

          <KeypadButton value="7" onClick={() => calculatorStore.append("7")} />
          <KeypadButton value="8" onClick={() => calculatorStore.append("8")} />
          <KeypadButton value="9" onClick={() => calculatorStore.append("9")} />
          <KeypadButton type="secondary" value={<FontAwesomeIcon icon={faPlus} />} />

          <KeypadButton value="." onClick={() => calculatorStore.append(".")} />
          <KeypadButton value="0" onClick={() => calculatorStore.append("0")} />
          <KeypadButton type="secondary" value={<FontAwesomeIcon icon={faEquals} />} />

          <KeypadButton type="secondary" value={<FontAwesomeIcon icon={faMinus} />} />
        </div>
      </div>
    </div>
  );
};

export default observer(Calculator);
