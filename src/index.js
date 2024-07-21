import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

export const server = "https://accredian-backend-task-opgm.onrender.com/api/v1";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
