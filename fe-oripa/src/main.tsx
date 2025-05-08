import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./assets/css/normalize.css";
import "./assets/css/webflow.css";
import "./assets/css/oripa-38f53f.webflow.css";
import "./style/webflow-override.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
