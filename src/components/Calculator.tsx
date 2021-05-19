import { faDivide, faEquals, faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import KeypadButton from "./KeypadButton";
import TitleBar from "./TitleBar";

const Calculator: FC = () => {
  return (
    <div className="calculator">
      <TitleBar title="Calculator" />
      <div className="calc-body">
        <div className="screen">100</div>

        <div className="keypad">
          <KeypadButton>1</KeypadButton>
          <KeypadButton>2</KeypadButton>
          <KeypadButton>3</KeypadButton>
          <KeypadButton type="secondary">
            <FontAwesomeIcon icon={faDivide} />
          </KeypadButton>
          <KeypadButton>4</KeypadButton>
          <KeypadButton>5</KeypadButton>
          <KeypadButton>6</KeypadButton>
          <KeypadButton type="secondary">
            <FontAwesomeIcon icon={faTimes} />
          </KeypadButton>
          <KeypadButton>7</KeypadButton>
          <KeypadButton>8</KeypadButton>
          <KeypadButton>9</KeypadButton>
          <KeypadButton type="secondary">
            <FontAwesomeIcon icon={faPlus} />
          </KeypadButton>
          <KeypadButton>.</KeypadButton>
          <KeypadButton>0</KeypadButton>
          <KeypadButton>
            <FontAwesomeIcon icon={faEquals} />
          </KeypadButton>
          <KeypadButton type="secondary">
            <FontAwesomeIcon icon={faMinus} />
          </KeypadButton>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
