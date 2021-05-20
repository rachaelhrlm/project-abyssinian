import React, { FC } from "react";
import Draggable from "react-draggable";
import Calculator from "./components/Calculator";
import calculatorStore from "./stores";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="app">
      <Draggable>
        <div className="desktop-icon" onDoubleClick={() => calculatorStore.open()}>
          <h2>Calculator</h2>
        </div>
      </Draggable>
      <Calculator />
    </div>
  );
};

export default App;
