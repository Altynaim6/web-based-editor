import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EditorProvider from "./app/providers/EditorProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EditorProvider>
      <App />
    </EditorProvider>
  </React.StrictMode>
);