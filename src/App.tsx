import React, { FC } from "react";
import Calculator from "./components/Calculator";
import DesktopIcon from "./components/DesktopIcon";
import TaskBar from "./components/TaskBar";
import calculatorStore from "./stores";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="app">
      <DesktopIcon label="Calculator" onClick={() => calculatorStore.open()} />
      <Calculator />

      <TaskBar />
    </div>
  );
};

export default App;
