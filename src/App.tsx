import React, { FC } from "react";
import Draggable from "react-draggable";
import Calculator from "./components/Calculator";
import DesktopIcon from "./components/DesktopIcon";
import calculatorStore from "./stores";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="app">
      <DesktopIcon label="Calculator" onClick={() => calculatorStore.open()} />
      <Calculator />
    </div>
  );
};

export default App;
