import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import stores from "./stores";

configure({ enforceActions: "observed", computedRequiresReaction: true });
ReactDOM.render(
  <Provider {...stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
