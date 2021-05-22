import React, { FC } from "react";
import Calculator from "./components/Calculator";
import DesktopIcon from "./components/DesktopIcon";
import TaskBar from "./components/TaskBar";
import calculatorStore from "./stores";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="app">
      <div className="test">
        <DesktopIcon label="Calculator" onClick={() => calculatorStore.open()} />
        <Calculator />
      </div>
      <TaskBar />
    </div>
  );
};

export default App;
