import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BlockContextProvider } from "./store/blockContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BlockContextProvider>
      <App />
    </BlockContextProvider>
  </React.StrictMode>
);
