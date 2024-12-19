import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProveedorAutenticacion from "./contexto/ContextoAutenticacion"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProveedorAutenticacion>
      <App />
    </ProveedorAutenticacion>
  </React.StrictMode>
);
