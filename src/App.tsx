import React, { FunctionComponent } from "react";
import Calculator from "./components/Calculator";
import "./styles/main.scss";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
};

export default App;
