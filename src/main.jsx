import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx"; // ← Ruta actualizada
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
