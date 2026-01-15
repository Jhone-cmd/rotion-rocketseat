import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

declare global {
  interface Window {
    platform?: {
      isMac: boolean;
    };
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

