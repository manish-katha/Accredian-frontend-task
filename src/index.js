import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

export const server = "http://localhost:4000/api/v1";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
