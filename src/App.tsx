import React, { FC } from "react";
import Calculator from "./components/Calculator";
import "./styles/main.scss";

const App: FC = () => {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
};

export default App;
