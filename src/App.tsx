import React, { FC } from "react";
import Calculator from "./components/Calculator";
import calculatorStore from "./stores";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="app">
      <div className="desktop-icon" onDoubleClick={() => calculatorStore.open()}>
        <h2>Calculator</h2>
      </div>
      <Calculator />
    </div>
  );
};

export default App;
